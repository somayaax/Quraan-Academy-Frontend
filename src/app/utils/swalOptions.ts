import { SweetAlertOptions } from "sweetalert2";

const deleteCourseOptions: SweetAlertOptions = {
    title: "Are you sure you want to delete this course?",
    showCancelButton: true,
    icon: "warning",
    customClass: {
        confirmButton: "bg-danger",
    },
    confirmButtonText: "Yes, delete it",
};
const deleteRecordedCourseOptions: SweetAlertOptions = {
    title: "Are you sure you want to delete this recorded course?",
    showCancelButton: true,
    icon: "warning",
    customClass: {
        confirmButton: "bg-danger",
    },
    confirmButtonText: "Yes, delete it",
};
const deleteChapterOptions: SweetAlertOptions = {
  title: "Are you sure you want to delete this chapter?",
  showCancelButton: true,
  icon: "warning",
  customClass: {
      confirmButton: "bg-danger",
  },
  confirmButtonText: "Yes, delete it",
};
const deleteCategoryOptions: SweetAlertOptions = {
    title: "Are you sure you want to delete this Category?",
    showCancelButton: true,
    icon: "warning",
    customClass: {
        confirmButton: "bg-danger",
    },
    confirmButtonText: "Yes, delete it",
};
const deleteTeacherOptions: SweetAlertOptions = {
    title: "Are you sure you want to delete this teacher?",
    showCancelButton: true,
    icon: "warning",
    customClass: {
        confirmButton: "bg-danger",
    },
    confirmButtonText: "Yes, delete it",
};

const deleteStudentOptions: SweetAlertOptions = {
  title: "Are you sure you want to delete this student?",
  showCancelButton: true,
  icon: "warning",
  customClass: {
      confirmButton: "bg-danger",
  },
  confirmButtonText: "Yes, delete it",
};
const deleteQuestionOptions: SweetAlertOptions = {
  title: "Are you sure you want to delete this question?",
  showCancelButton: true,
  icon: "warning",
  customClass: {
      confirmButton: "bg-danger",
  },
  confirmButtonText: "Yes, delete it",
};
export default {
    deleteCourseOptions,
    deleteRecordedCourseOptions,
    deleteTeacherOptions,
    deleteCategoryOptions,
    deleteChapterOptions,
    deleteStudentOptions,
    deleteQuestionOptions
};
