namespace WebApplication2.DTOs.Requests;

public class AddItem
{
    public string Text { get; set; }

    public bool IsCompleted = false;

    public string Date = DateTime.Now.ToString("yyyy-mm-dd, hh-mm");


}
