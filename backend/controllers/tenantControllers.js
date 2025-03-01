import Tenant from "../models/tenantModel.js";

export const createTenant = async (req, res) => {
  try {
    const { name, subdomain } = req.body;
    const tenant = new Tenant({ name, subdomain });
    await tenant.save();
    console.log("Tenant created", tenant);
    res.status(201).json(tenant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getTenants = async (req, res) => {
  const tenants = await Tenant.find();
  res.json(tenants);
};
