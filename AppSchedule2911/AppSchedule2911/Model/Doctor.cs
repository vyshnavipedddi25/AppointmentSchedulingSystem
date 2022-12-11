using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AppSchedule2911.Model
{
    [Table("Doctor")]
    public class Doctor
    {
        [Key]
        public int Did { get; set; }
        public string DName { get; set; }
        public string DSpecialization { get; set; }
    }
}
