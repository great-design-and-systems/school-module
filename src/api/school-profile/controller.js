import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { SchoolProfile } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  SchoolProfile.create(body)
    .then((schoolProfile) => schoolProfile.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  SchoolProfile.find(query, select, cursor)
    .then((schoolProfiles) => schoolProfiles.map((schoolProfile) => schoolProfile.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  SchoolProfile.findById(params.id)
    .then(notFound(res))
    .then((schoolProfile) => schoolProfile ? schoolProfile.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  SchoolProfile.findById(params.id)
    .then(notFound(res))
    .then((schoolProfile) => schoolProfile ? _.merge(schoolProfile, body).save() : null)
    .then((schoolProfile) => schoolProfile ? schoolProfile.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  SchoolProfile.findById(params.id)
    .then(notFound(res))
    .then((schoolProfile) => schoolProfile ? schoolProfile.remove() : null)
    .then(success(res, 204))
    .catch(next)
