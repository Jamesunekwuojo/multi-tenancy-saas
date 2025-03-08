import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subdomain: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Tenant = mongoose.model("Tenant", tenantSchema);

export default Tenant;
