import Tenant from '../models/tenantModel.js';

export const createTenant = async (req, res) => {
    const { name, subdomain } = req.body;
    const tenant = new Tenant({ name, subdomain });
    await tenant.save();
    res.status(201).json(tenant);
};

export const getTenants = async (req, res) => {
    const tenants = await Tenant.find();
    res.json(tenants);
};
