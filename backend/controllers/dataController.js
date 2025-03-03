// const prisma = require('../config/db');
// const { getCache, setCache } = require('../services/cache');
// const { NotFoundError, ValidationError } = require('../utils/errors');

import prisma from "../config/db.js";
import { getCache, setCache } from '../services/cache.js';

export const createData = async (req, res, next) => {
    const { data } = req.body;

    try {
        const tenantData = await prisma.tenantData.create({
            data: { tenantId: req.tenantId, data },
        });
        res.status(201).json(tenantData);
    } catch (err) {
        next(err);
    }
};

export const getData = async (req, res, next) => {
    try {
        const cacheKey = `tenantData:${req.tenantId}`;
        const cachedData = await getCache(cacheKey);
        if (cachedData) {
            return res.json(cachedData);
        }

        const data = await prisma.tenantData.findMany({
            where: { tenantId: req.tenantId },
        });
        await setCache(cacheKey, data);
        res.json(data);
    } catch (err) {
        next(err);
    }
};

