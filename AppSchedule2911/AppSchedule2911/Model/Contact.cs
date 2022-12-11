using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AppSchedule2911.Model
{
    
        [Table("Contact")]
        public class Contact
        {
            [Key]
            public int CId { get; set; }
            public string CName { get; set; }
            public string CEmail { get; set; }
            public string CMessage { get; set; }
        }
 }

