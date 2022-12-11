using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AppSchedule2911.Model
{
    [Table("Appointment")]
    public class Appointment
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FName { get; set; }
        [Required]
        public string LName { get; set; }
        public string Email { get; set; }
        [Required]
        [StringLength(10)]
        public string Mobile { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public string Doctor { get; set; }
        public string Confirm { get; set; }

        [ForeignKey("UserName")]
        public string  UserName { get; set; }
        public Register Register { get; set; }
  
    }
}
