"use client";
import * as React from "react";
import * as Form from "@/components/ui/form";
import * as Schema from "@/schemas";
import * as ReactIcon from "react-icons/fa";
import {
  Container,
  Section,
  Grid,
  Flex,
  Heading,
  Text,
  Box,
} from "@radix-ui/themes";
import { contactInfoUseForm } from "@/hooks";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const form = contactInfoUseForm();
  return (
    <Container className="min-h-fit bg-[#0f172a]/95 text-primary group">
      <Section>
        <Grid columns={{ initial: "1", sm: "4" }}>
          <Flex
            gap={"5"}
            direction={"column"}
            justify={"start"}
            className="px-5 mb-10"
            gridColumn={{ initial: "1", sm: "1" }}
          >
            <Heading as={"h1"} className="text-[35px]">
              Contact
            </Heading>
            <Box
              as="div"
              className="border-b-2 border-primary w-1/5 group-hover:w-10/12"
            ></Box>
            <Card className="shadow-2xl h-fit bg-primary text-center hover:scale-105">
              <CardHeader>
                <CardTitle>
                  <Flex
                    direction={"column"}
                    align={"center"}
                    justify={"center"}
                  >
                    <MailIcon />
                    <Heading as="h1" align={"center"} size={"5"}>
                      Email
                    </Heading>
                  </Flex>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text as="p" className="text-balance -mt-5" size={"1"}>
                  harunausmanbello204@gmail.com
                </Text>
                <Text
                  as="p"
                  className="text-balance  text-muted-foreground"
                  size={"1"}
                >
                  Click to Send Message
                </Text>
              </CardContent>
            </Card>
            <Card className="shadow-2xl h-fit bg-primary text-center hover:scale-105">
              <CardHeader>
                <CardTitle>
                  <Flex
                    direction={"column"}
                    align={"center"}
                    justify={"center"}
                  >
                    <PhoneIcon />
                    <Heading as="h1" align={"center"} size={"5"}>
                      Call
                    </Heading>
                  </Flex>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text
                  as="p"
                  className="text-balance -mt-5 text-muted-foreground"
                >
                  +234 903 9083 938
                </Text>
                <Text
                  as="p"
                  className="text-balance text-muted-foreground"
                  size={"1"}
                >
                  Click to Call
                </Text>
              </CardContent>
            </Card>
            <Card className="shadow-2xl h-fit bg-primary text-center hover:scale-105">
              <CardHeader>
                <CardTitle>
                  <Flex
                    direction={"column"}
                    align={"center"}
                    justify={"center"}
                  >
                    <ReactIcon.FaWhatsapp />
                    <Heading as="h1" align={"center"} size={"5"}>
                      WhatsApp
                    </Heading>
                  </Flex>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text
                  as="p"
                  className="text-balance -mt-5 text-muted-foreground"
                >
                  +234 903 9083 938
                </Text>
                <Text
                  as="p"
                  className="text-balance text-muted-foreground"
                  size={"1"}
                >
                  Click to Chat
                </Text>
              </CardContent>
            </Card>
          </Flex>

          <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            gridColumn={{ initial: "1", sm: "2 / span 3" }}
            className="px-5 pt-10"
          >
            <Form.Form {...form}>
              <form
                onSubmit={form.handleSubmit(
                  async (data: Schema.contactInfoType) => {
                    console.log({ data });
                  }
                )}
                className="flex flex-col justify-center space-y-8 w-full"
                noValidate
                autoFocus
              >
                <Form.FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <Form.FormItem>
                      <Form.FormControl>
                        <Input
                          type="text"
                          placeholder="Your Name"
                          className="border-primary"
                          required
                          {...field}
                        />
                      </Form.FormControl>
                      <Form.FormMessage />
                    </Form.FormItem>
                  )}
                />
                <Form.FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <Form.FormItem>
                      <Form.FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="border-primary"
                          required
                          {...field}
                        />
                      </Form.FormControl>
                      <Form.FormMessage />
                    </Form.FormItem>
                  )}
                />
                <Form.FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <Form.FormItem>
                      <Form.FormControl>
                        <Input
                          type="tel"
                          placeholder="Contact Number"
                          className="border-primary"
                          required
                          {...field}
                        />
                      </Form.FormControl>
                      <Form.FormMessage />
                    </Form.FormItem>
                  )}
                />
                <Form.FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <Form.FormItem>
                      <Form.FormControl>
                        <Textarea
                          placeholder="Message here..."
                          className="resize-none h-40 w-full border-primary"
                          {...field}
                        />
                      </Form.FormControl>
                      <Form.FormMessage />
                    </Form.FormItem>
                  )}
                />
                <Button>SEND MESSAGE</Button>
              </form>
            </Form.Form>
          </Flex>
        </Grid>
      </Section>
    </Container>
  );
};
export default ContactPage;
