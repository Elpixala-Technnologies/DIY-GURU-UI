import { avatar } from "@/assets";
import {
  FaChartPie,
  FaLaptopCode,
  FaPenNib,
  FaRocketchat,
} from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdAutoGraph, MdGolfCourse } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

export const dashboard = {
  tabs: [
    {
      id: "1",
      label: "Dashboard",
      icon: <RxDashboard />,
      content: {
        title: "Hello Maietry👋",
        subtitle: "Welcome to your DIYGuru Seller Dashboard!",
        totalStudents: "+50,000",
        totalCourse: "+10K",
        totalTeachers: "+800",
        completionRate: "80%",
        studentEngagement: {
          interaction: "67%",
          reviews: "4.5",
          platformUsage: "78%",
          retentionRate: "80%",
          skillMastery: "90%",
        },
        monthlyProgressChartData: [
          { name: "Jan", joined: 4000 },
          { name: "Feb", joined: 3000 },
          { name: "Mar", joined: 2000 },
          { name: "Apr", joined: 2780 },
          { name: "May", joined: 1890 },
          { name: "Jun", joined: 2400 },
          { name: "Jul", joined: 3200 },
          { name: "Aug", joined: 4300 },
          { name: "Sep", joined: 3900 },
          { name: "Oct", joined: 2800 },
          { name: "Nov", joined: 2100 },
          { name: "Dec", joined: 3500 },
        ],
        salesStatisticsChartData: [
          { name: "Mon", joined: 500 },
          { name: "Tues", joined: 700 },
          { name: "Wed", joined: 600 },
          { name: "Thu", joined: 800 },
          { name: "Fri", joined: 650 },
          { name: "Sat", joined: 300 },
          { name: "Sun", joined: 400 },
        ],
        courses: [
          {
            id: "1",
            title: "Basic: HTML and CSS",
            icon: <FaLaptopCode />,
            href: "#",
            isPopular: false,
          },
          {
            id: "2",
            title: "Branding Design",
            icon: <FaPenNib />,
            href: "#",
            isPopular: false,
          },
          {
            id: "3",
            title: "Motion Design",
            icon: <MdAutoGraph />,
            href: "#",
            isPopular: true,
          },
          {
            id: "4",
            title: "Data Sciences",
            icon: <FaChartPie />,
            href: "#",
            isPopular: false,
          },
        ],
        staff: [
          {
            id: 1,
            courseName: "UX Research & Case Study Prepare",
            instructor: {
              name: "Pankaj Prajapati",
              avatar: { url: avatar },
            },
            progress: 80,
            level: "advance",
            nextAssignment: "Apr 25, 2022 | 12:00 PM",
          },
          {
            id: 2,
            courseName: "Figma Advanced Prototype",
            instructor: {
              name: "Pankaj Prajapati",
              avatar: { url: avatar },
            },
            progress: 50,
            level: "medium",
            nextAssignment: "Apr 25, 2022 | 12:00 PM",
          },
          {
            id: 3,
            courseName: "UX Law Study with Real Examples",
            instructor: {
              name: "Pankaj Prajapati",
              avatar: { url: avatar },
            },
            progress: 65,
            level: "beginner",
            nextAssignment: "Apr 25, 2022 | 12:00 PM",
          },
        ],
      },
    },
    {
      id: "2",
      label: "Users",
      icon: <PiStudentBold />,
      content: {
        title: "Dashboard",
        subtitle: "Hello Adeniyi👋, you can manage all of your sections here!",
        totalStudents: 932,
        totalTeachers: 60,
        totalCourse: 40,
        totalFees: 120000,
      },
    },
    {
      id: "3",
      label: "Courses",
      icon: <MdGolfCourse />,
      content: {
        title: "Dashboard",
        subtitle: "Hello Adeniyi👋, you can manage all of your sections here!",
        totalStudents: 932,
        totalTeachers: 60,
        totalCourse: 40,
        totalFees: 120000,
      },
    },
    {
      id: "4",
      label: "Report & Analytics",
      icon: <MdAutoGraph />,
      content: {
        title: "Dashboard",
        subtitle: "Hello Adeniyi👋, you can manage all of your sections here!",
        totalStudents: 932,
        totalTeachers: 60,
        totalCourse: 40,
        totalFees: 120000,
      },
    },
    {
      id: "5",
      label: "Communication",
      icon: <FaRocketchat />,
      content: {
        title: "Dashboard",
        subtitle: "Hello Adeniyi👋, you can manage all of your sections here!",
        totalStudents: 932,
        totalTeachers: 60,
        totalCourse: 40,
        totalFees: 120000,
      },
    },
    {
      id: "6",
      label: "Help & Support",
      icon: <IoIosHelpCircleOutline />,
      content: {
        title: "Dashboard",
        subtitle: "Hello Adeniyi👋, you can manage all of your sections here!",
        totalStudents: 932,
        totalTeachers: 60,
        totalCourse: 40,
        totalFees: 120000,
      },
    },
  ],
};
