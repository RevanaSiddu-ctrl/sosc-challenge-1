"use client";

// Components
import NavBar from "./compnents/NavBar";
import CardA from "./compnents/cardA";
import CardB from "./compnents/cardB";
import CardC from "./compnents/cardC";
import Footer from "./compnents/Footer";

// Data
import { eventsData } from "./data/blogdata";
import { eventsData as upcomingEvents } from "./data/Events";
import { teamData } from "./data/members";

import { redirect } from "next/navigation";

export default function Page() {
  redirect("/home");
}