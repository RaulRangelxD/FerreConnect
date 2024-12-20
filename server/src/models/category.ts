import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, set: (value: string) => value.toLowerCase() },
})

categorySchema.index({ name: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } })

export const categoryModel = mongoose.model('category', categorySchema, 'category')
