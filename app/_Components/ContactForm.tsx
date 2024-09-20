import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default function ContactForm() {
  return (
    <div className="min-h-screen items-center justify-center">
      <div className="w-full  grid shadow-lg">
       
        <div className="bg-white p-8 flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-500 mb-6">Feel free to drop us a line below!</p>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded" />
            <Input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded" />
            <Textarea placeholder="Typing your message here..." className="w-full px-4 py-2 border border-gray-300 rounded h-32" />
            <Button type="submit" className="bg-[#010830] text-white px-6 py-2 rounded-full hover:bg-[#021166] transition duration-300">
              SEND
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}