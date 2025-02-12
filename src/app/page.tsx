import React from "react";
import { Button } from "@/shadcn/components/ui/button";
import { Card, CardContent } from "@/shadcn/components/ui/card";
import { Input } from "@/shadcn/components/ui/input";
import { Mail } from "lucide-react";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white  text-black dark:bg-black dark:text-white">
   

      {/* Landing Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-4xl font-bold">Welcome to MyApp</h2>
        <p className="mt-4 text-lg">Your one-stop solution for everything.</p>
        <Button className="mt-6">Explore Now</Button>
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Feature One</h3>
            <p className="text-sm mt-2">Discover amazing features with us.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Feature Two</h3>
            <p className="text-sm mt-2">Enhance your workflow easily.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Feature Three</h3>
            <p className="text-sm mt-2">Boost productivity with our tools.</p>
          </CardContent>
        </Card>
      </section>

      {/* Newsletter Section */}
      <section className="flex flex-col items-center py-10 px-6 ">
        <h3 className="text-2xl font-bold">Stay Updated</h3>
        <p className="mt-2">Subscribe to our newsletter for the latest updates.</p>
        <div className="flex mt-4 w-full max-w-md">
          <Input type="email" placeholder="Enter your email" className="flex-1" />
          <Button className="ml-2 flex items-center gap-2">
            <Mail size={16} /> Subscribe
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 text-center  text-sm">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;