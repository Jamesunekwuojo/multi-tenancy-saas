export const resolveTenant = async (req, res, next) => {
    const tenant = req.headers['x-tenant'];
    if (!tenant) {
        return res.status(400).json({ message: 'Tenant header is required' });
    }
    req.tenant = tenant;
    next();
}