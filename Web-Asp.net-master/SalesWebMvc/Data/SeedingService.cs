using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SalesWebMvc.Models;
using SalesWebMvc.Models.Enums;

namespace SalesWebMvc.Data
{
    public class SeedingService
    {
        private SalesWebMvcContext _context;

        public SeedingService(SalesWebMvcContext context)
        {
            _context = context;
        }

        public void Seed()
        {
            if (_context.Department.Any() ||
                _context.Seller.Any()||
               _context.SalesRecord.Any())
            {
                return; //DB has been seeded
            }
            Department d1 = new Department(1, "Computadores");
            Department d2 = new Department(2, "Eletrônicos");
            Department d3 = new Department(3, "Livros");
            Department d4 = new Department(4, "Moda");

            Seller s1 = new Seller(1, "Bob Brown", "bob@gmail.com", new DateTime(1998, 04, 21), 1000.0, d1);
            Seller s2 = new Seller(2, "Sumara Bortoletto", "sub@gmail.com", new DateTime(1968, 08, 26), 7000.0, d2);
            Seller s3 = new Seller(3, "Renato", "renato@gmail.com", new DateTime(1982, 02, 22), 11000.0, d3);
            Seller s4 = new Seller(4, "Mimoo gato", "mimb@gmail.com", new DateTime(2013, 04, 21), 100.0, d1);
            Seller s5 = new Seller(5, "BB pequena", "bb@gmail.com", new DateTime(2019, 12, 21), 130.0, d2);
            Seller s6 = new Seller(6, "Loro Casa", "loro@gmail.com", new DateTime(1959, 05, 11), 1090.0, d1);


            SalesRecord r1 = new SalesRecord(1, new DateTime(2018, 06, 06), 5000.0,SaleStatus.Billed, s1);
            SalesRecord r2 = new SalesRecord(2, new DateTime(2016, 01, 29), 1000.0, SaleStatus.Billed, s3);
            SalesRecord r3 = new SalesRecord(3, new DateTime(2019, 11, 06), 1200.0, SaleStatus.Billed, s2);
            SalesRecord r4 = new SalesRecord(4, new DateTime(2020, 06, 06), 19900.0, SaleStatus.Billed, s3);
            SalesRecord r5 = new SalesRecord(5, new DateTime(2020, 01, 22), 17799.0, SaleStatus.Billed, s4);
            SalesRecord r6 = new SalesRecord(6, new DateTime(2020, 04, 07), 50.0, SaleStatus.Billed, s5);
            SalesRecord r7 = new SalesRecord(7, new DateTime(2020, 06, 05), 5190.0, SaleStatus.Billed, s5);
            SalesRecord r8 = new SalesRecord(8, new DateTime(2021, 01, 31), 890.0, SaleStatus.Billed, s1);
            SalesRecord r9 = new SalesRecord(9, new DateTime(2021, 04, 06), 12789.0, SaleStatus.Billed, s5);
            SalesRecord r10 = new SalesRecord(10, new DateTime(2021, 04, 06), 115000.0, SaleStatus.Billed, s3);
            SalesRecord r11 = new SalesRecord(11, new DateTime(2021, 04, 07), 5789.0, SaleStatus.Billed, s1);



            _context.Department.AddRange(d1, d2, d3, d4);

            _context.Seller.AddRange(s1, s2, s3, s4, s5, s6);

            _context.SalesRecord.AddRange(r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11);

            _context.SaveChanges();
        }
    }
}
