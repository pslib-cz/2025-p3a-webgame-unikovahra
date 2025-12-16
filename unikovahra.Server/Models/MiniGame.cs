namespace unikovahra.Server.Models
{
    public class MiniGame
    {
        public int Id { get; set; }

        public int RoomId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string SuccessTitle { get; set; }
        public string SuccessSubtitle { get; set; }
        public string SuccessText { get; set; }

        public string FailureTitle { get; set; }
        public string FailureSubtitle { get; set; }
        public string FailureText { get; set; }
    }
}
