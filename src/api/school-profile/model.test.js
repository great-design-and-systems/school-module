import { SchoolProfile } from '.'

let schoolProfile

beforeEach(async () => {
  schoolProfile = await SchoolProfile.create({ name: 'test', address: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = schoolProfile.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(schoolProfile.id)
    expect(view.name).toBe(schoolProfile.name)
    expect(view.address).toBe(schoolProfile.address)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = schoolProfile.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(schoolProfile.id)
    expect(view.name).toBe(schoolProfile.name)
    expect(view.address).toBe(schoolProfile.address)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
