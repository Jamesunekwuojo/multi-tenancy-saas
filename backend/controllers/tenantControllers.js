// const prisma = require('../config/db');
// const { getCache, setCache } = require('../services/cache');
// const { NotFoundError, ValidationError } = require('../utils/errors');

import prisma from "../config/db.js";
import { getCache, setCache } from "../services/cache.js";

export const createTenant = async (req, res, next) => {
    const { name, subdomain } = req.body;

    try {
        const tenant = await prisma.tenant.create({
            data: { name, subdomain },
        });
        res.status(201).json(tenant);
    } catch (err) {
        next(err);
    }
};

export const getTenants = async (req, res, next) => {
    try {
        const cachedTenants = await getCache('tenants');
        if (cachedTenants) {
            return res.json(cachedTenants);
        }

        const tenants = await prisma.tenant.findMany();
        await setCache('tenants', tenants);
        res.json(tenants);
    } catch (err) {
        next(err);
    }
};

