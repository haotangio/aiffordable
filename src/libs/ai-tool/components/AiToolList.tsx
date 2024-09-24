import * as React from "react";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {AITool} from "../models/AITool";

export function AiToolList({aiTools}: { aiTools: AITool[]}) {
  return (
    <List>
      {aiTools.map(({id, label, logo}) => (
        <Link href={`/chat?provider=openai&model=${id}`} key={id} style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img height="24" width="24" src={logo} alt="AI tool logo"/>
              </ListItemIcon>
              <ListItemText primary={label}/>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
