using ECommerce.API.Models;
using System.Data.SqlClient;

namespace ECommerce.API.DataAccess
{
    public class DataAccess : IDataAccess
    {
        private readonly IConfiguration configuration;
        private readonly string dbconnection;
        private readonly string dateformat;

        public DataAccess(IConfiguration configuration)
        {
            this.configuration = configuration;
            dbconnection = this.configuration["ConnectionStrings:DB"];
            dateformat = this.configuration["Constants:DateFormat"];
        }

        public List<ProductCategory> GetProductCategories()
        {
            var productCategories = new List<ProductCategory>();
            using (SqlConnection connection = new SqlConnection(dbconnection))
            {
                SqlCommand command = new()
                {
                    Connection = connection,
                };

                string query = "SELECT * FROM ProductCategories;";
                command.CommandText = query;
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    var productCategoy = new ProductCategory()
                    {
                        Id = (int)reader["CategoryId"],
                        Category = (string)reader["Category"],
                        SubCategory = (string)reader["SubCategory"]
                    };
                    productCategories.Add(productCategoy);

                }
            }


             return productCategories;
        }
    }
}
