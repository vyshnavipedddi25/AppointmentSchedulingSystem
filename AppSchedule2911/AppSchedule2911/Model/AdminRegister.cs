using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AppSchedule2911.Model
{
    [Table("AdminRegister")]
    public class AdminRegister
    {
        [Key]
        public int Id { get; set; }
        public string AName { get; set; }
        public string Password { get; set; }
        public string Designation { get; set; }
        public string Token { get; set; }
    }
}
