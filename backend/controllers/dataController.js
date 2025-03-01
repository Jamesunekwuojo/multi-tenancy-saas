import TenantData from '../models/tenantDataModel.js';


export const createData = async (req, res) => {
    const { data } = req.body;
    const tenantData = new TenantData({ tenantId: req.tenantId, data });
    await tenantData.save();
    res.status(201).json(tenantData);
};

export const getData = async (req, res) => {
    const data = await TenantData.find({ tenantId: req.tenantId });
    res.json(data);
};

