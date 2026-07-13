using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Models;
using WebApplication2.Data;
using Microsoft.EntityFrameworkCore;
using WebApplication2.DTOs.Requests;
using WebApplication2.Migrations;

namespace WebApplication2.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ValuesController : ControllerBase
{
    private readonly DataContext _context;

    public ValuesController(DataContext context)
    {
        _context = context;
    }


    [HttpPost("Add-Item")]

    public ActionResult AddItem(AddItem req)
    {
        Item newItem = new Item {
            Text = req.Text,
            IsCompleted = false,
            Date = DateTime.Now.ToString("yyyy-mm-dd, hh-mm"),
        };
        _context.items.Add(newItem);
        _context.SaveChanges();
        return Ok(newItem);
    }



    [HttpGet("Get-List")]
    public ActionResult GetList()
    {

        var list = _context.items.ToList();
        return Ok(list);
    }

    [HttpGet("Active")]

    public ActionResult GetActive()
    {



        var activeItems = _context.items.Where(x => x.IsCompleted == false).ToList();
        return Ok(activeItems);
    }

    [HttpGet("Completed")]

    public ActionResult GetCompleted()
    {

        var completedItems = _context.items.Where(x => x.IsCompleted == true).ToList();
        return Ok(completedItems);
    }

    [HttpPut("update-item/{id}")]

    public ActionResult PutItem(int id)
    {
        var existingItem = _context.items.FirstOrDefault(x =>  x.Id == id);

        if(existingItem == null)
        {
            return NotFound(new { message = "Item Not Found" });
        }

        existingItem.IsCompleted = !existingItem.IsCompleted;
        _context.SaveChanges();
        return Ok(existingItem);
    }

    [HttpDelete("Delete-Item/{id}")]
    public ActionResult DeleteItem(int id)
    {
        var item = _context.items.FirstOrDefault(x => x.Id == id);

        if (item != null)
        {
            _context.items.Remove(item);
            _context.SaveChanges();
        }
        else
        {
            return BadRequest("Item Not Found");
        }
            return Ok();
    }
}
