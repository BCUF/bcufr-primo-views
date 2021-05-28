export class bcuCourseReserveController {
    constructor(bcuConfigService, bcuCourseReserveConfig) {
        this.bcuConfigService = bcuConfigService;
        this.config = bcuCourseReserveConfig;
        this.courses = [];
        if (this.afterCtrl.parentCtrl.isCourseDocument()) {
            let params = {"R":"id","N":"faculty","M":"course","V":"total"};
            for (let i= 0; i < this.afterCtrl.parentCtrl.item.pnx.display.crsinfo.length; i++) {
                let course = {};
                let elems = this.afterCtrl.parentCtrl.item.pnx.display.crsinfo[i].split('$$');
                for (let elem of elems) {
                    if (elem.charAt(0) in params) {
                        course[params[elem.charAt(0)]] = elem.slice(1);
                    }
                }
                let teachers = course.total.split('; ');
                teachers.shift();
                if (teachers.length && !teachers[0].includes(',')) {
                    teachers.shift();
                }
                course.teachers = teachers.join('; ');
                this.courses.push(course);
            }
        }
    }

    showCourse(courseID) {
        if (this.bcuConfigService.getParam('query') != "course_code,exact," + courseID) {
            window.location.href="search?query=course_code,exact," + courseID + "&tab=CourseReserves&search_scope=CourseReserves&vid=" + this.bcuConfigService.getView() + "&mode=advanced";
        }
    }
}

bcuCourseReserveController.$inject = [ 'bcuConfigService', 'bcuCourseReserveConfig' ];
