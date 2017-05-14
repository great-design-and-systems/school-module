import mongoose, { Schema } from 'mongoose'

const schoolProfileSchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  }
}, {
  timestamps: true
})

schoolProfileSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      address: this.address,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('SchoolProfile', schoolProfileSchema)

export const schema = model.schema
export default model
