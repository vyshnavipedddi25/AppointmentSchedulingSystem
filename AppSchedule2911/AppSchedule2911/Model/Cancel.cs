using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AppSchedule2911.Model
{[Table("Cancel")]
    public class Cancel
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public int Id { get; set; }
        
        public string FName { get; set; }
        
        public string LName { get; set; }
        public string Email { get; set; }
        
        
        public string Mobile { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public string Doctor { get; set; }
        public string Confirm { get; set; }
    }
}
