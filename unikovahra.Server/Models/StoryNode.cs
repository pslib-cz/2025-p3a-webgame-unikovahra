namespace unikovahra.Server.Models
{
    public class StoryNode
    {
        public int Id { get; set; }

        public string Header { get; set; }
        public string Text { get; set; }
        public string OptionA { get; set; }
        public int? NextA { get; set; }
        public string OptionB { get; set; }
        public int? NextB { get; set; }
        public string ImageUrl { get; set; }

    }
}
