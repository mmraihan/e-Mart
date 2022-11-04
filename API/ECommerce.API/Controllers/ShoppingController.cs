using ECommerce.API.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingController : ControllerBase
    {
        private readonly IDataAccess dataAccess;
        private readonly string Dateformat;
        public ShoppingController(IDataAccess dataAccess, IConfiguration configuration)
        {
            this.dataAccess = dataAccess;
            Dateformat = configuration["Constants:DateFormat"];
        }

        [HttpGet("GetCategoryList")]

        public IActionResult GetCategoryList()
        {
            var result = dataAccess.GetProductCategories();
            return Ok(result);
        }

        [HttpGet("GetProducts")]
        public IActionResult GetProducts(string category, string subCategory, int count)
        {
            var result = dataAccess.GetProducts(category,subCategory,count);
            return Ok(result);
        }
    }
}
