using ECommerce.API.Models;

namespace ECommerce.API.DataAccess
{
    public interface IDataAccess
    {
        List<ProductCategory> GetProductCategories();
    }
}
