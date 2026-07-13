namespace WebApplication2.DTOs.Requests;

public class UpdateItem
{
    public string Text { get; set; }

    public bool IsCompleted = false;

    public string Date = DateTime.Now.ToString();
}
