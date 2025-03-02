import mongoose from 'mongoose';



export const tenantDataSchema = new mongoose.Schema({
    tenant_id: { type: String, required: true },
    data: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const TenantData = mongoose.model('TenantData', tenantDataSchema);

export default TenantData;
