import { Button } from "@mui/material";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

export default function ButtonLink({children, to}: {children: ReactNode, to: string}) {
  return (
    <Button
        component={NavLink}
        to={to}
        sx={{
            frontSize: '1.2rem',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'inherit',
            '&.active' : {
                color: 'yellow'
            }
        }}
    >
        {children}
    </Button>
  )
}