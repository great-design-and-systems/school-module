import CreateFacultyProfile from '../../control/faculty/CreateFacultyProfile';
import UpdateFacultyProfile from '../../control/faculty/UpdateFacultyProfile';
import GetFacultyProfileByFacultyId from '../../control/faculty/GetFacultyProfileByFacultyId';
import DeleteFacultyProfileByFacultyId from '../../control/faculty/DeleteFacultyProfileByFacultyId';
import GetFaculties from '../../control/faculty/GetFaculties';
import ValidateFacultyId from '../../control/faculty/ValidateFacultyId';

export default class Faculties {
    getProfileByFacultyId(facultyId, callback) {
        new GetFacultyProfileByFacultyId(facultyId, function (err, result) {
            if (err) {
                callback(err);
            } else {
                if (result) {
                    callback(null, result);
                } else {
                    callback(true, null);
                }
            }
        });
    }
    create(param, callback) {
        new CreateFacultyProfile({
            facultyId: param.facultyId,
            firstName: param.firstName,
            middleName: param.middleName,
            lastName: param.lastName,
            gender: param.gender,
            contactNo: param.contactNo,
            emailAddress: param.emailAddress,
            department: param.department,
            imageId: param.imageId
        }, callback);
    }
    update(facultyId, param, callback) {
        new UpdateFacultyProfile(facultyId, param, callback);
    }
    removeFaculty(facultyId, callback) {
        new DeleteFacultyProfileByFacultyId(facultyId, (err) => {
            if (!err) {
                callback(undefined, {
                    message: 'Faculty has been removed.'
                });
            } else {
                callback(err);
            }
        });
    }
    getFaculties(queryParam, callback) {
        console.log(queryParam);
        new GetFaculties(queryParam, (err, result) => {
            if (err) {
                callback({message: 'Failed to get faculty records.'});
            } else {
                callback(undefined, result);
            }
        });
    }
    validateFacultyId(facultyId, callback) {
        new ValidateFacultyId(facultyId, callback);
    }
}