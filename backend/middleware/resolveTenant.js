import Prism from "../config/db.js"


const resolveTenant = async (req, res, next) => {
    const tenantId = req.headers['x-tenant-id'] || req.user?.tenantId;
    if (!tenantId) return res.status(400).json({ error: 'Tenant ID is required.' });

    const tenant = await prisma.tenant.findUnique({
        where: { id: tenantId },
    });
    if (!tenant) return res.status(404).json({ error: 'Tenant not found.' });

    req.tenantId = tenantId;
    next();
};

export default resolveTenant;