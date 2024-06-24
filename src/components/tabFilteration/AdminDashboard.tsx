"use client";
import React, { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaRegCheckCircle,
  FaRegClipboard,
  FaStar,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { RiBook2Line, RiSearchLine } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // defs,
  // linearGradient,
  // stop,
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  IoBookOutline,
  IoChatbubbleEllipsesOutline,
  IoCloseOutline,
  IoHelpCircleOutline,
  IoPeople,
} from "react-icons/io5";
import { GoBell } from "react-icons/go";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { HiCursorClick } from "react-icons/hi";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { Button } from "../ui/button";
import classNames from "classnames";
import { CiSettings } from "react-icons/ci";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { DateRangePicker } from "../ui/date-range-picker";

export default function AdminDashboard({ tab }: any) {
  function handleSearch() {
    // search operation
  }
  return (
    <>
      {/* Title and Search Section  */}
      <div className="flex w-full justify-between pb-6">
        <div>
          {tab?.content?.title && (
            <h2 className="text-xl">{tab?.content?.title}</h2>
          )}
          {tab?.content?.subtitle && (
            <p className="text-sm text-zinc-600">{tab?.content?.subtitle}</p>
          )}
        </div>
        <div className="flex gap-3">
          <div className="relative flex h-10 cursor-pointer items-center rounded-xl border-2 border-foreground/15 bg-white px-2">
            <div className="absolute right-1 top-2">
              <p className="flex h-2 w-2 items-center justify-center rounded-full border-2 border-white bg-red-500 p-1 text-xs text-white"></p>
            </div>
            <IoChatbubbleEllipsesOutline className="text-xl text-zinc-950" />
          </div>
          <div className="relative flex h-10 cursor-pointer items-center rounded-xl border-2 border-foreground/15 bg-white px-2">
            <div className="absolute right-2 top-2">
              <p className="flex h-2 w-2 items-center justify-center rounded-full border-2 border-white bg-red-500 p-1 text-xs text-white"></p>
            </div>
            <GoBell className="text-xl text-zinc-950" />
          </div>
          <div className="flex h-10 cursor-pointer items-center rounded-xl border-2 border-foreground/15 bg-white px-2">
            <IoHelpCircleOutline className="text-xl text-zinc-950" />
          </div>
          {/* Search Bar  */}
          <div className="flex h-10 max-w-56 items-center rounded-xl border-2 border-foreground/15 bg-white px-5 pr-3">
            <input
              className="w-full focus:outline-none max-md:p-3"
              type="text"
              placeholder="Search here..."
              onChange={handleSearch}
            />
            <RiSearchLine className="text-xl text-zinc-950" />
          </div>
          {/* Avatar  */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DG</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-9 pr-5">
          {/* Section 0 - Filter Section  */}
          <div className="flex gap-2">
            <DateRangePicker
              onUpdate={(values) => console.log(values)}
              initialDateFrom="2024-06-1"
              // initialDateTo="2024-06-1"
              align="start"
              locale="en-GB"
              showCompare={true}
            />
          </div>

          {/* section 1 - Overview */}
          <h2 className="mb-3 text-xl">Overview</h2>
          <div className="flex justify-between gap-5">
            <Card
              icon={<PiStudentBold />}
              iconBgColor="bg-purple-400"
              text="Total Students"
              value={tab?.content?.totalStudents}
              bgColor="bg-purple-100"
            />
            <Card
              icon={<GiTeacher />}
              iconBgColor="bg-indigo-400"
              text="Teachers"
              value={tab?.content?.totalTeachers}
              bgColor="bg-indigo-100"
            />
            <Card
              icon={<FaGraduationCap />}
              iconBgColor="bg-emerald-400"
              text="Total Course"
              value={tab?.content?.totalCourse}
              bgColor="bg-emerald-100"
            />
            <Card
              icon={<TiTickOutline />}
              iconBgColor="bg-lime-400"
              text="Total Fees"
              value={tab?.content?.completionRate}
              bgColor="bg-lime-100"
            />
          </div>
          {/* Section 2 - Report & Analytics  */}
          <div className="my-5">
            <div className="flex justify-between">
              <div className="flex w-full justify-between">
                <h6 className="mb-3 text-xl">Report & Analytics</h6>
                <Link href="#" className="hover:underline">
                  See All
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-5">
              {/* ProgressBar  */}
              <StudentEngagement data={tab?.content?.studentEngagement} />
              {/* Chart  */}
              <MonthlyProgressChart
                data={tab?.content?.monthlyProgressChartData}
              />
            </div>
          </div>
          {/* Section 3 - Manage Courses  */}
          <div className="my-5">
            <div className="flex w-full justify-between">
              <h6 className="mb-3 text-xl">Manage Courses</h6>
              <button className="hover:underline">Add more</button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {tab?.content?.courses?.map((course: any, index: number) => (
                <CourseCard key={course?.id} data={course} index={index} />
              ))}
            </div>
          </div>
          {/* Section 4 - Manage Staff  */}
          <div className="my-5">
            <div className="flex w-full justify-between">
              <h6 className="mb-3 text-xl">Manage Staff</h6>
              <button className="hover:underline">See All</button>
            </div>
            <Staff data={tab?.content?.staff} />
          </div>
        </div>

        {/* Right Aside Section */}
        <aside className="col-span-3 flex flex-col gap-3">
          {/* Sales Information  */}
          <SalesInformation data={tab?.content?.salesStatisticsChartData} />
          {/* Upcoming Tasks */}
          <UpcomingTasks data={tab?.content} />
        </aside>
      </div>
    </>
  );
}

function Card({ icon, text, value, iconBgColor, bgColor }: any) {
  return (
    <div
      className={`flex items-center gap-2 rounded-2xl ${bgColor} p-5 shadow-xl`}
    >
      <p className="flex flex-col gap-y-1">
        <span className="text-2xl font-medium text-black">{value}</span>
        <span className="text-nowrap text-sm font-medium text-zinc-500">
          {text}
        </span>
      </p>
      <div
        className={`h-min rounded-full ${iconBgColor} p-4 text-4xl text-zinc-800`}
      >
        {icon}
      </div>
    </div>
  );
}

function StudentEngagement({ data }: any) {
  const [percentage, setPercentage] = useState(0);
  const targetPercentage = 90;
  const strokeDasharray = 599.74; // Circumference of the circle

  useEffect(() => {
    // Trigger the percentage increase animation
    let currentPercentage = 0;
    const interval = setInterval(() => {
      if (currentPercentage < targetPercentage) {
        currentPercentage += 1;
        setPercentage(currentPercentage);
      } else {
        clearInterval(interval);
      }
    }, 16); // Adjust the interval time as needed for the animation speed

    return () => clearInterval(interval);
  }, [targetPercentage]);

  const strokeDashoffset =
    strokeDasharray - (percentage / 100) * strokeDasharray;

  return (
    <div className="col-span-4 flex flex-col justify-between rounded-2xl border-2 border-foreground/15 p-3">
      {/* title */}
      <div className="flex justify-between">
        <h6 className="text-lg font-normal">Student Engagement</h6>
        <MdArrowOutward className="text-xl text-zinc-900" />
      </div>
      {/* Progress bar */}
      <div className="relative">
        <svg
          width="200"
          height="200"
          viewBox="-26.375 -26.375 263.75 263.75"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            r="95.5"
            cx="105.5"
            cy="105.5"
            fill="transparent"
            stroke="#9d95ab"
            strokeWidth="25"
            strokeDasharray={strokeDasharray}
            strokeDashoffset="0"
          ></circle>
          <circle
            r="104.5"
            cx="105.5"
            cy="105.5"
            stroke="#7a4d8b"
            strokeWidth="40"
            strokeLinecap="butt"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="progress-circle"
          ></circle>
          <text
            x="60px"
            y="122px"
            fill="#454459"
            fontSize="49px"
            fontWeight="bold"
            style={{ transform: "rotate(90deg) translate(-6px, -216px)" }}
          >
            {percentage}%
          </text>
          <text
            x="60px"
            y="122px"
            fill="#000000"
            fontSize="16px"
            fontWeight="normal"
            style={{ transform: "rotate(90deg) translate(-3px, -196px)" }}
          >
            Active users
          </text>
        </svg>
        <div className="absolute right-0 top-0 z-20 flex items-center gap-2 rounded-2xl bg-blue-500/20 p-2 backdrop-blur-sm backdrop-filter">
          <HiCursorClick className="text-4xl text-yellow-500" />
          <p className="flex flex-col">
            <span className="text-2xl font-medium text-black">67%</span>
            <span className="text-zinc-500">Interaction</span>
          </p>
        </div>
        <div className="absolute right-0 top-24 z-20 flex items-center gap-2 rounded-2xl bg-blue-500/20 p-2 backdrop-blur-sm backdrop-filter">
          <FaStar className="text-4xl text-yellow-500" />
          <p className="flex flex-col">
            <span className="text-2xl font-medium text-black">4.5/5</span>
            <span className="text-zinc-500">Reviews</span>
          </p>
        </div>
      </div>
      {/* footer */}
      <div className="relative bottom-0 left-0 flex justify-between">
        <p className="flex flex-col items-center text-center text-xs">
          <span className="flex items-center gap-2 text-base font-bold text-black">
            <FaRegCheckCircle className="text-blue-500" />
            78%
          </span>
          <span>Platform Usage</span>
        </p>
        <p className="flex flex-col items-center text-center text-xs">
          <span className="flex items-center gap-2 text-base font-bold text-black">
            <FaRegCheckCircle className="text-blue-500" />
            80%
          </span>
          <span>Retention Rate</span>
        </p>
        <p className="flex flex-col items-center text-center text-xs">
          <span className="flex items-center gap-2 text-base font-bold text-black">
            <FaRegCheckCircle className="text-blue-500" />
            90%
          </span>
          <span>Skill Mastery</span>
        </p>
      </div>
    </div>
  );
}
function MonthlyProgressChart({ data }: any) {
  const [time, setTime] = useState("Yearly");
  const [rateDirection, setRateDirection] = useState(true);

  function handleTimeDuration(time: string) {
    setTime(time);
  }
  const formatYAxis = (tick: any) => {
    if (tick >= 1000000) {
      return `${tick / 1000000}M`;
    } else if (tick >= 1000) {
      return `${tick / 1000}K`;
    }
    return tick;
  };
  return (
    <div className="col-span-6 rounded-2xl border-2 border-foreground/15 p-3">
      {/* Title with filter  */}
      <div className="flex justify-between">
        <h6 className="text-lg font-normal">Monthly Registrations</h6>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 outline-none">
            {time} <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["Yearly", "Monthly", "Daily"].map((item, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => handleTimeDuration(item)}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Chart  */}
      <div className="flex flex-col">
        <p className="mb-3">Students registered in last month</p>
        <p className="flex gap-2">
          <span className="text-2xl font-medium text-black">+25,000</span>
          <span className="mt-2 flex gap-1 text-sm font-medium text-foreground">
            2.3%{" "}
            {rateDirection ? (
              <FaArrowTrendUp className="text-green-500" />
            ) : (
              <FaArrowTrendDown className="text-red-500" />
            )}
          </span>
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C86CEA" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#D17AF2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            // angle={-45} // Rotate X-axis labels to an angle
            textAnchor="end" // Anchor X-axis labels at the end
            interval={0} // Display all labels without skipping
            tick={{ fontSize: 12 }} // Adjust font size of X-axis labels
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={formatYAxis}
            // label={{
            //   value: "Student Joined",
            //   angle: -90,
            //   position: "insideCenter",
            //   className: "custom-y-axis-label",
            // }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="joined"
            stroke="#7A4D8B"
            strokeWidth="2"
            fill="url(#colorUv)"
            yAxisId="right"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function SalesInformation({ data }: any) {
  const formatYAxis = (tick: any) => {
    if (tick >= 1000000) {
      return `${tick / 1000000}M`;
    } else if (tick >= 1000) {
      return `${tick / 1000}K`;
    }
    return tick;
  };

  return (
    <div className="min-h-max rounded-2xl border-2 border-foreground/15 bg-gradient-to-tr from-purple-100 from-10% via-white to-purple-100 p-3">
      {/* Title  */}
      <div className="flex justify-between">
        <h6 className="text-lg font-normal">Sales Information</h6>
        <BsThreeDotsVertical className="cursor-pointer text-zinc-400" />
      </div>
      <p className="mb-3 text-sm font-medium">
        <span className="text-green-600">Closed at:</span> 7th June, 2024
      </p>
      {/* Sales Information  */}
      <div className="mb-3 flex gap-5">
        <p className="flex flex-col">
          <span className="text-xs">Net sales</span>
          <span className="text-2xl font-medium text-black">₹ 25k</span>
        </p>
        <p className="flex flex-col">
          <span className="text-xs">Refunds</span>
          <span className="text-2xl font-medium text-black">₹ 2k</span>
        </p>
        <p className="flex flex-col">
          <span className="text-xs">Commissions/Fees</span>
          <span className="text-2xl font-medium text-black">₹ 2.5k</span>
        </p>
      </div>
      {/* Statistics Chart Text */}
      <p>Statistics</p>
      <div className="flex gap-5">
        <p className="flex gap-1 text-black">
          <span>2.7K</span>
          <span className="mt-1.5 text-xs">Sales</span>
        </p>
        <p className="flex gap-1 text-red-500">
          <span>3.8K</span>
          <span className="mt-1.5 text-xs">Target</span>
        </p>
      </div>
      {/* Statistics Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C86CEA" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#D17AF2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-45} // Rotate X-axis labels to an angle
            textAnchor="end" // Anchor X-axis labels at the end
            interval={0} // Display all labels without skipping
            tick={{ fontSize: 12 }} // Adjust font size of X-axis labels
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={formatYAxis}
            // label={{
            //   value: "Sales",
            //   angle: -90,
            //   position: "insideCenter",
            //   className: "custom-y-axis-label",
            // }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="joined"
            stroke="#7A4D8B"
            strokeWidth="2"
            fill="url(#colorUv)"
            yAxisId="right"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function UpcomingTasks({ data }: any) {
  return (
    <div className="min-h-max rounded-2xl border-2 border-foreground/15 bg-gradient-to-tr from-purple-100 from-10% via-white to-purple-100 p-3">
      {/* Title  */}
      <div className="flex justify-between">
        <h6 className="text-lg font-normal">Sales Information</h6>
        <BsThreeDotsVertical className="cursor-pointer text-zinc-400" />
      </div>
      {/* Card 1  */}
      <div className="my-1 min-h-max rounded-2xl border-2 border-foreground/15 bg-white p-3">
        {/* Card Title  */}
        <div className="flex justify-between">
          <h6 className="font-medium">Course Updates</h6>
          <IoMdClose className="cursor-pointer text-zinc-500" />
        </div>
        {/* list  */}
        <ul>
          <li className="border-b border-foreground/15 p-2">
            <div className="flex gap-2">
              <SlBookOpen className="text-4xl text-black" />
              <p className="flex flex-col">
                <span className="text-sm text-foreground">
                  Update Lesson 5 in "Advanced Woodworking"
                </span>
                <span className="text-xs text-green-600">
                  Deadline: June 15
                </span>
              </p>
            </div>
            <div className="flex-end flex">
              <button className="ml-auto rounded-e-full rounded-s-full bg-foreground px-2 py-1 text-sm text-white hover:bg-foreground/90">
                Update
              </button>
            </div>
          </li>
          <li className="p-2">
            <div className="flex gap-2">
              <SlBookOpen className="text-4xl text-black" />
              <p className="flex flex-col">
                <span className="text-sm text-foreground">
                  Update Lesson 5 in "Advanced Woodworking"
                </span>
                <span className="text-xs text-green-600">
                  Deadline: June 15
                </span>
              </p>
            </div>
            <div className="flex-end flex">
              <button className="ml-auto rounded-e-full rounded-s-full bg-foreground px-2 py-1 text-sm text-white hover:bg-foreground/90">
                Update
              </button>
            </div>
          </li>
        </ul>
        <ul></ul>
      </div>
      {/* Card 2  */}
      <div className="my-1 min-h-max rounded-2xl border-2 border-foreground/15 bg-white p-3">
        {/* Card Title  */}
        <div className="flex justify-between">
          <h6 className="font-medium">Assignments</h6>
          <IoMdClose className="cursor-pointer text-zinc-500" />
        </div>
        {/* list  */}
        <ul>
          <li className="border-b border-foreground/15 p-2">
            <div className="flex gap-2">
              <RiBook2Line className="text-4xl text-black" />
              <p className="flex flex-col">
                <span className="text-sm text-foreground">
                  Grade submissions for "DIY Electronics"
                </span>
                <span className="text-xs text-green-600">
                  Deadline: June 15
                </span>
              </p>
            </div>
            <div className="flex-end flex">
              <button className="ml-auto rounded-e-full rounded-s-full bg-foreground px-2 py-1 text-sm text-white hover:bg-foreground/90">
                Grade Now
              </button>
            </div>
          </li>
        </ul>
      </div>
      {/* Card 3  */}
      <div className="my-1 min-h-max rounded-2xl border-2 border-foreground/15 bg-white p-3">
        {/* Card Title  */}
        <div className="flex justify-between">
          <h6 className="font-medium">Other Tasks</h6>
          <IoMdClose className="cursor-pointer text-zinc-500" />
        </div>
        {/* list  */}
        <ul>
          <li className="border-b border-foreground/15 p-2">
            <div className="flex gap-2">
              <IoChatbubbleEllipsesOutline className="text-4xl text-black" />
              <p className="flex flex-col">
                <span className="text-sm text-foreground">
                  Respond to student queries
                </span>
                <span className="text-xs text-green-600">
                  Deadline: June 15
                </span>
              </p>
            </div>
            <div className="flex-end flex">
              <button className="ml-auto rounded-e-full rounded-s-full bg-foreground px-2 py-1 text-sm text-white hover:bg-foreground/90">
                Respond
              </button>
            </div>
          </li>
          <li className="border-b border-foreground/15 p-2">
            <div className="flex gap-2">
              <IoChatbubbleEllipsesOutline className="text-4xl text-black" />
              <p className="flex flex-col">
                <span className="text-sm text-foreground">
                  Review course feedback and ratings
                </span>
                <span className="text-xs text-green-600">
                  Deadline: June 15
                </span>
              </p>
            </div>
            <div className="flex-end flex">
              <button className="ml-auto rounded-e-full rounded-s-full bg-foreground px-2 py-1 text-sm text-white hover:bg-foreground/90">
                Respond
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function CourseCard({ data, index }: any) {
  const colorArr = ["blue", "red", "green", "yellow", "purple"];
  const colorIndex = index % colorArr.length;
  const selectedColor = colorArr[colorIndex];

  return (
    <div
      className={classNames(
        "relative rounded-xl border border-zinc-300 p-3 pt-5 shadow-md",
        `bg-${selectedColor}-100 bg-opacity-40`,
      )}
    >
      {data?.isPopular && (
        <p className="absolute left-0 top-0 w-min text-nowrap rounded-ee-2xl bg-pink-100 px-4 py-1 text-xs text-red-600">
          Popular Course
        </p>
      )}
      <IoCloseOutline className="absolute right-2 top-2 cursor-pointer text-lg text-zinc-500" />
      <div className="m-3 flex justify-between">
        <div
          className={classNames(
            "rounded-lg bg-white p-2 text-xl",
            `text-${selectedColor}-500`,
          )}
        >
          {data?.icon}
        </div>
        <Button
          className={classNames(
            "rounded-e-full rounded-s-full bg-white shadow-[0px_0px_2px_4px_#e2e8f0]",
            `text-${selectedColor}-500`,
          )}
        >
          Enroll Now
        </Button>
      </div>
      <h6 className="mx-1 my-3 text-zinc-950">{data?.title}</h6>
      <div className="flex justify-evenly rounded-2xl bg-white p-3">
        <p className="flex items-center gap-2 font-medium text-black">
          <IoBookOutline />
          24
        </p>
        <p
          className={classNames(
            "flex items-center gap-2 font-medium",
            `text-${selectedColor}-500`,
          )}
        >
          {" "}
          |{" "}
        </p>
        <p className="flex items-center gap-2 font-medium text-black">
          <FaRegClipboard />8
        </p>
        <p
          className={classNames(
            "flex items-center gap-2 font-medium",
            `text-${selectedColor}-500`,
          )}
        >
          {" "}
          |{" "}
        </p>
        <p className="flex items-center gap-2 font-medium text-black">
          <IoPeople />
          99
        </p>
      </div>
    </div>
  );
}

function Staff({ data }: any) {
  return (
    <>
      {/* Table Head  */}
      <div className="mb-5 grid grid-cols-[repeat(14,_minmax(0,_1fr))] gap-1 rounded-xl border border-zinc-300 bg-purple-200 px-4 py-2 shadow-md">
        <p className="col-span-3 text-purple-900">Course Name</p>
        <p className="col-span-3 text-center text-purple-900">Instructor</p>
        <p className="col-span-2 text-center text-purple-900">Progress</p>
        <p className="col-span-2 text-center text-purple-900">Level</p>
        <p className="col-span-3 text-center text-purple-900">
          Next Assignment
        </p>
        <p className="col-span-1 text-end text-purple-900">Action</p>
      </div>
      {/* Table Rows  */}
      <ul>
        {data?.map((staff: any) => (
          <li
            key={staff?.id}
            className="my-3 grid grid-cols-[repeat(14,_minmax(0,_1fr))] gap-1 rounded-xl border border-zinc-300 bg-white px-4 py-1 text-sm shadow-md"
          >
            <p className="col-span-3 my-auto font-medium text-zinc-500">
              {staff?.courseName}
            </p>
            <p className="col-span-3 my-auto flex items-center gap-2 font-medium text-zinc-800">
              <Image
                src={staff?.instructor?.avatar?.url}
                width={24}
                height={24}
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
              {staff?.instructor?.name}
            </p>
            <div className="col-span-2 my-auto flex items-center gap-2 font-medium text-purple-900">
              <Progress className="h-1.5" value={staff?.progress} />
              <p className="text-zinc-500">{staff?.progress}%</p>
            </div>
            <div className="col-span-2 my-auto flex justify-center text-purple-900">
              <div
                className={`w-min rounded-md border-2 px-2 py-1 font-medium capitalize ${
                  staff.level === "beginner"
                    ? "border-green-500 bg-green-100 text-green-600"
                    : staff.level === "medium"
                      ? "border-orange-500 bg-orange-100 text-orange-600"
                      : "border-purple-500 bg-purple-100 text-purple-600"
                }`}
              >
                {staff?.level}
              </div>
            </div>
            <p className="col-span-3 my-auto text-center text-zinc-700">
              {staff?.nextAssignment}
            </p>
            <p className="col-span-1 my-auto flex justify-end text-end text-purple-900">
              <CiSettings className="cursor-pointer text-3xl" />
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
