-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'admin',

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_code` VARCHAR(191) NOT NULL,
    `employee_name_th` VARCHAR(191) NOT NULL,
    `employee_name_en` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `position` VARCHAR(191) NULL,
    `department` VARCHAR(191) NULL,
    `work_location` VARCHAR(191) NULL,
    `supervisor_name` VARCHAR(191) NULL,
    `start_date` DATETIME(3) NULL,
    `end_date` DATETIME(3) NULL,
    `status` VARCHAR(191) NULL,

    UNIQUE INDEX `employees_employee_code_key`(`employee_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_descriptions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` INTEGER NOT NULL,
    `description` TEXT NOT NULL,

    INDEX `course_descriptions_course_id_idx`(`course_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_code` VARCHAR(191) NOT NULL,
    `course_name` VARCHAR(191) NOT NULL,
    `course_category` VARCHAR(191) NULL,
    `training_type` VARCHAR(191) NULL,
    `organizing_agency` VARCHAR(191) NULL,
    `certificate_required` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `courses_course_code_key`(`course_code`),
    INDEX `courses_course_code_idx`(`course_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `training_records` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NOT NULL,
    `course_id` INTEGER NOT NULL,
    `training_date` DATETIME(3) NOT NULL,
    `training_hour` DOUBLE NULL,
    `training_result` VARCHAR(191) NULL,
    `trainer_name` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `expire_date` DATETIME(3) NULL,
    `attachment` VARCHAR(191) NULL,
    `note` TEXT NULL,
    `created_by` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `training_records_employee_id_idx`(`employee_id`),
    INDEX `training_records_course_id_idx`(`course_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `course_descriptions` ADD CONSTRAINT `course_descriptions_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `training_records` ADD CONSTRAINT `training_records_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `training_records` ADD CONSTRAINT `training_records_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
