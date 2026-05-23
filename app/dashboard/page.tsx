"use client";

import {
  Package,
  DollarSign,
  ShoppingCart,
  Users,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Total Revenue",
    value: "$248K",
    icon: DollarSign,
  },

  {
    title: "Orders",
    value: "1,248",
    icon: ShoppingCart,
  },

  {
    title: "Products",
    value: "324",
    icon: Package,
  },

  {
    title: "Clients",
    value: "89",
    icon: Users,
  },
];

const orders = [
  {
    company: "NVIDIA Enterprise",
    product: "H100 GPU",
    amount: "$24,999",
    status: "Processing",
  },

  {
    company: "Intel Systems",
    product: "Xeon Max",
    amount: "$12,400",
    status: "Completed",
  },

  {
    company: "AMD Labs",
    product: "MI300 Accelerator",
    amount: "$18,900",
    status: "Pending",
  },
];

export default function BusinessDashboardPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#020817]
        px-6 py-10
      "
    >

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div
          className="
            mb-10
            flex flex-col gap-6
            xl:flex-row
            xl:items-center
            xl:justify-between
          "
        >

          <div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-cyan-400
              "
            >
              Supplier Dashboard
            </p>

            <h1
              className="
                mt-4
                text-5xl
                font-black
                text-white
              "
            >
              Enterprise Control Panel
            </h1>

            <p
              className="
                mt-4
                max-w-2xl
                text-lg
                leading-8
                text-gray-400
              "
            >
              Manage procurement,
              inventory,
              enterprise orders,
              and supplier operations.
            </p>

          </div>

          <button
            className="
              rounded-2xl
              bg-cyan-400
              px-8 py-4
              font-bold
              text-black
              transition-all
              hover:bg-cyan-300
            "
          >
            Add New Product
          </button>

        </div>

        {/* STATS */}

        <section
          className="
            grid gap-6
            sm:grid-cols-2
            2xl:grid-cols-4
          "
        >

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}

                viewport={{ once: true }}

                whileHover={{
                  y: -5,
                }}

                className="
                  rounded-3xl
                  border border-white/10
                  bg-[#081225]
                  p-6
                  transition-all
                  hover:border-cyan-400/20
                "
              >

                <div
                  className="
                    flex items-center justify-between
                  "
                >

                  <div>

                    <p className="text-gray-400">
                      {stat.title}
                    </p>

                    <h2
                      className="
                        mt-4
                        text-4xl
                        font-black
                        text-white
                      "
                    >
                      {stat.value}
                    </h2>

                  </div>

                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-cyan-400/10
                    "
                  >

                    <Icon
                      size={28}
                      className="text-cyan-400"
                    />

                  </div>

                </div>

                <div
                  className="
                    mt-6
                    flex items-center gap-2
                    text-sm text-green-400
                  "
                >

                  <ArrowUpRight size={16} />

                  +12.4% this month

                </div>

              </motion.div>
            );
          })}
        </section>

        {/* MAIN GRID */}

        <div
          className="
            mt-10
            grid gap-8
            xl:grid-cols-[1fr_380px]
          "
        >

          {/* ORDERS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.5,
            }}

            viewport={{ once: true }}

            className="
              rounded-3xl
              border border-white/10
              bg-[#081225]
              p-8
            "
          >

            <div
              className="
                mb-8
                flex items-center justify-between
              "
            >

              <div>

                <h2
                  className="
                    text-3xl
                    font-black
                    text-white
                  "
                >
                  Recent Orders
                </h2>

                <p
                  className="
                    mt-2
                    text-gray-400
                  "
                >
                  Enterprise procurement activity
                </p>

              </div>

              <button
                className="
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  px-5 py-3
                  text-white
                  hover:bg-white/10
                "
              >
                View All
              </button>

            </div>

            <div className="space-y-5">

              {orders.length === 0 && (

                <div
                  className="
                    rounded-3xl
                    border border-dashed
                    border-white/10
                    bg-[#020817]
                    p-12
                    text-center
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    No Orders Yet
                  </h3>

                  <p
                    className="
                      mt-4
                      text-gray-400
                    "
                  >
                    Orders and RFQs will appear here
                    once procurement activity begins.
                  </p>

                </div>

              )}

              {orders.map((order) => (

                <div
                  key={order.company}
                  className="
                    flex flex-col gap-5
                    rounded-2xl
                    border border-white/5
                    bg-[#020817]
                    px-6 py-5
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                  "
                >

                  <div>

                    <p
                      className="
                        text-lg
                        font-bold
                        text-white
                      "
                    >
                      {order.company}
                    </p>

                    <p
                      className="
                        mt-2
                        text-gray-400
                      "
                    >
                      {order.product}
                    </p>

                  </div>

                  <div
                    className="
                      flex flex-col gap-4
                      lg:items-end
                    "
                  >

                    <p
                      className="
                        text-2xl
                        font-black
                        text-white
                      "
                    >
                      {order.amount}
                    </p>

                    <span
                      className="
                        rounded-full
                        bg-cyan-400/10
                        px-4 py-2
                        text-sm
                        font-semibold
                        text-cyan-400
                      "
                    >
                      {order.status}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT PANEL */}

          <div className="space-y-8">

            {/* INVENTORY */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: 0.2,
              }}

              viewport={{ once: true }}

              className="
                rounded-3xl
                border border-white/10
                bg-[#081225]
                p-8
              "
            >

              <h2
                className="
                  text-2xl
                  font-black
                  text-white
                "
              >
                Inventory Status
              </h2>

              <div className="mt-8 space-y-5">

                {[
                  [
                    "AI GPUs",
                    "128 Units",
                  ],

                  [
                    "Processors",
                    "342 Units",
                  ],

                  [
                    "Networking ICs",
                    "89 Units",
                  ],
                ].map(([name, value]) => (

                  <div
                    key={name}
                    className="
                      rounded-2xl
                      border border-white/5
                      bg-[#020817]
                      p-5
                    "
                  >

                    <div
                      className="
                        flex items-center justify-between
                      "
                    >

                      <span className="text-white">
                        {name}
                      </span>

                      <span className="text-cyan-400">
                        {value}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </motion.div>

            {/* RFQ */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: 0.3,
              }}

              viewport={{ once: true }}

              className="
                rounded-3xl
                border border-cyan-400/20
                bg-cyan-400/5
                p-8
              "
            >

              <h2
                className="
                  text-2xl
                  font-black
                  text-white
                "
              >
                RFQ Requests
              </h2>

              <p
                className="
                  mt-4
                  leading-7
                  text-gray-300
                "
              >
                You currently have
                14 pending procurement RFQs
                awaiting supplier response.
              </p>

              <button
                className="
                  mt-8
                  w-full
                  rounded-2xl
                  bg-cyan-400
                  py-4
                  font-bold
                  text-black
                  transition-all
                  hover:bg-cyan-300
                "
              >
                Manage RFQs
              </button>

            </motion.div>

          </div>

        </div>

      </div>

    </main>
  );
}