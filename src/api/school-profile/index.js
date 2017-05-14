import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export SchoolProfile, { schema } from './model'

const router = new Router()
const { name, address } = schema.tree

/**
 * @api {post} /school-profiles Create school profile
 * @apiName CreateSchoolProfile
 * @apiGroup SchoolProfile
 * @apiParam name School profile's name.
 * @apiParam address School profile's address.
 * @apiSuccess {Object} schoolProfile School profile's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 School profile not found.
 */
router.post('/',
  body({ name, address }),
  create)

/**
 * @api {get} /school-profiles Retrieve school profiles
 * @apiName RetrieveSchoolProfiles
 * @apiGroup SchoolProfile
 * @apiUse listParams
 * @apiSuccess {Object[]} schoolProfiles List of school profiles.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /school-profiles/:id Retrieve school profile
 * @apiName RetrieveSchoolProfile
 * @apiGroup SchoolProfile
 * @apiSuccess {Object} schoolProfile School profile's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 School profile not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /school-profiles/:id Update school profile
 * @apiName UpdateSchoolProfile
 * @apiGroup SchoolProfile
 * @apiParam name School profile's name.
 * @apiParam address School profile's address.
 * @apiSuccess {Object} schoolProfile School profile's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 School profile not found.
 */
router.put('/:id',
  body({ name, address }),
  update)

/**
 * @api {delete} /school-profiles/:id Delete school profile
 * @apiName DeleteSchoolProfile
 * @apiGroup SchoolProfile
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 School profile not found.
 */
router.delete('/:id',
  destroy)

export default router
