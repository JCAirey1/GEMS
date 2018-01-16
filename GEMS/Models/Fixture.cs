using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace GEMS.Models
{
    public class Fixture
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public int Lamps { get; set; }
        public int Watts { get; set; }
    }
}