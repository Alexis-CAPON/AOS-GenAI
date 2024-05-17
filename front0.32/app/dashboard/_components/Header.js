"use client";
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuShortcut,
  } from "@/components/ui/dropdown-menu"

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { signOut } from 'next-auth/react';
import { useCurrentUser } from '@/hooks/use-current-user';
 
const Header = () => {

    const router = useRouter();

    const rag = [
        {
          value: "cgi_global",
          label: "CGI Global",
        },
        {
          value: "architect",
          label: "Architect",
        },
        {
          value: "engie",
          label: "Engie",
        },
        {
          value: "personal",
          label: "Personal",
        },
      ]
    
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const user = useCurrentUser();


    const handleLogout = () => {
        signOut();
    }

    const handleSettings = () => {
        router.push("/dashboard/settings");
    }

    const handleAdmin = () => {
        router.push('/admin');
    }

    return (
        <div>
        <div className='flex mt-3 mb-3 items-center'>
            <div className='flex ml-3 items-center'>
                <img 
                    src="https://cdn.discordapp.com/attachments/763389153635205141/1226323618636628038/logo2.png?ex=662459de&is=6611e4de&hm=73447851d7f0836f372703b59e2780d7b319213795c58991ec50f9b44787023c&" 
                    className='h-8 w-8'
                    
                />
                <Label className='ml-2 mr-3'>ChatCBC</Label>
            </div>

            <Separator className='h-6 mr-3' orientation='vertical' />

            <Label className='ml-2 mr-3'>All in One Secured Generative AI</Label>

            <Popover className="ml-auto mr-4" open={open} onOpenChange={setOpen}>
                <PopoverTrigger className="ml-auto mr-4" asChild>
                    <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between ml-auto"
                    >
                    {value
                        ? rag.find((rag) => rag.value === value)?.label
                        : "Select documents..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                    <CommandInput placeholder="Search rag..." className="h-9" />
                    <CommandEmpty>No documents found.</CommandEmpty>
                    <CommandGroup>
                        {rag.map((rag) => (
                        <CommandItem
                            key={rag.value}
                            value={rag.value}
                            onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                            }}
                        >
                            {rag.label}
                            <CheckIcon
                            className={cn(
                                "ml-auto h-4 w-4",
                                value === rag.value ? "opacity-100" : "opacity-0"
                            )}
                            />
                        </CommandItem>
                        ))}
                    </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>

            <DropdownMenu className='ml-auto mr-4'>
                <DropdownMenuTrigger className='ml-auto mr-4'>
                    <Avatar>
                        <AvatarImage src={user?.image} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                    <DropdownMenuItem>{user?.email}</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                    {user?.role === 'ADMIN' && (
                        <DropdownMenuItem onClick={handleAdmin}>Admin menu</DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={handleSettings}>
                        Settings
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        </div>

    );
};

export default Header;
