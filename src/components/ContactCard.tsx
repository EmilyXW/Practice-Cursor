"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export interface ContactCardProps {
  /** Full name of the contact */
  name: string;
  /** Role or title (e.g. "Software Engineer") */
  role?: string;
  /** URL to avatar image */
  avatarUrl?: string;
  /** Contact email address */
  email: string;
}

/**
 * ContactCard composes Card, Avatar, and Button from shadcn/ui
 * to display a simple contact profile with name, role, avatar, and email.
 */
export function ContactCard({ name, role, avatarUrl, email }: ContactCardProps) {
  return (
    <Card className="w-72">
      <CardHeader className="flex flex-col items-center space-y-2">
        <Avatar className="h-16 w-16">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={name} />
          ) : (
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          )}
        </Avatar>
        <CardTitle>{name}</CardTitle>
        {role && <CardDescription>{role}</CardDescription>}
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <a href={`mailto:${email}`} className="text-sm text-muted-foreground">
          {email}
        </a>
        <Button variant="outline" size="sm">
          Send Message
        </Button>
      </CardContent>
    </Card>
  );
}
