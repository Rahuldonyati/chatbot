"use client"

import { Home, MessageSquare, Share, LogOut } from 'lucide-react';
import { Button } from "@/shadcn/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shadcn/components/ui/tooltip';
import Image from 'next/image';
import { Card } from '@/shadcn/components/ui/card';
import { useIsMobile } from "@/shadcn/hooks/use-mobile";

export function AppSidebar() {
  const isMobile = useIsMobile();

  const navItems = [
    { icon: Home, label: "Home" },
    { icon: MessageSquare, label: "Messages" },
    { icon: Share, label: "Share" },
  ];

  if (isMobile) {
    return (
      <Card className="fixed rounded-none bottom-0 left-0 w-full flex justify-around bg-primary text-white p-2 z-40">
        {navItems.map(({ icon: Icon, label }, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="p-3">
                <Icon className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side='top'>{label}</TooltipContent>
          </Tooltip>
        ))}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" className="p-3">
              <LogOut className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side='top'>Logout</TooltipContent>
        </Tooltip>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col h-screen fixed left-0 top-0 w-14 pt-4 bg-primary text-white dark:bg-purple-dark rounded-l-none rounded-tr-none rounded-br-none z-40">
      {/* Logo at the top */}
      <div className="flex items-center justify-center ">
        <Image alt="logo" width="40" height="40" 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA9lBMVEUSASv///8AAAASASz//v8RASr///0LACYwJUYAAB0AAAwAACRSSWESAS0TASrk4+gAACGuqLcAABQAABcQACcAABMAABsAAAkIACYqF0E7LUwfFDSQi53///oAACUAAAURAyft6+/29vXSztYIACm/usf59vx0boKjnawkFz5+doqxrLrNydCuqbnMx9Ti4OgnHjsTADE/N09FPlJpYXYiGTSYkKWRjZkbCjLa2NtdU3Hs7etJQFgjCzxdWmmCgYo2M0ZCM1R7cYlUSGRqW3i0s7lKQF0tKEFbU2eMh5RsaXZPSFqGfZI0J0xtY3osJ0A8J1RFQE89Pxr4AAATrUlEQVR4nO1dCXeiSNeGgoIAAStQqJO4gKLSamtinCw96W2mJzGdTPc3///PfLcK3MUYMJ3Me3jO6ZO0EayHW3X3KgUhR44cOXLkyJEjR44cOXLkyJEjR44cOXLkyJEjR44cOXLkyJEjR44cOXLk+A/AxM+BIFCLYo8KkiBY1muPfUeYgbYrdATQtVqAMQWW5msPfTdgelrYGdfNZuuoMv73d6I7talU3zpocCAqO0KUZVlkaA/74UPZdlRMX3v8O0A9EJ+DiKLCaPYvTkuOagmShdm6fLN4JsNlDC+vEBHMt70iUzNUFC7T1gQR+qbXYwYZsoUJNK8/gBzfMMVMszTiKTbP6yp+s0sxM0PgWBV7Z/ableI+GIKGbXeQ+kZX4x4YitUqqJ1Wjbw2l83YB0OR28k/blwKUpTemu3YE0POsqML9O1Z/z0yVMQKovTNLcY9MgSEQPG1Ga1ivwyB4psz/ntmKF7o/+sMxY79xuzivhkq8oj8VxhWN8TALJ5QnuD4Bw7MHXM4mILupSxVQOPfJHPvxiaRoSKvvsJfUJSnGIottJsQ4V0Ylw1CNMfRCKmVqWS+gCpOYAg8xh9/W8a7207Y8p/iBxg7T1IEudFAq6PazafPny/D8PL+86djB+m1AO/boiYz/IsEy1BJ0badm/d/PEFQaRtPxFJYoqrrjLqtQmNhpsjt4VHnWLeD/Wa4khjK4qGxIWNKLUMPOgUxXpMbAcEUSh6jZMJiI/pxONz0WEV5ePFF14Q9SnIbww1v5yyJ89gQ5W3r8XiLPsVYK036CRfKEGyKza5mU7qvjPNWGSZcQ6n7brBNpyotRDfrU0mgBE2G7OLqxisjUfoVR9uXzknBkC2TMgqT+cG/r8TceLWJ9d/g4ShygkpmzBX2o3GvE2Ev6zGNDPlQ0Z/wpkQ59tG6sjElyVRRZc0KJTC9/gusjudlFmVKhpaJGcVEhu0v5bVrwKRr5dYu/BjgQYQukSQpK8WUDLFpSuhCTJZH6K5dLZnOsb9dQy2hKg5PHEnyXoehgC2BomSBVP36+tXuX214JrsyZBOk/UE3vYx+XFqGAEkNfEXeLBNZHJNFD0zCJnU/7C6/6TDEH3VYi5mSsRkYClgbi4mW/0hfZIgF0/kg76RkliCLFSRIUhbbmIWhJKFBEsOqjxZrbxiTkZxkIrahKj4iYddYZd8MTYsaN0maoyqOjEWGZQwzWtlo5beBPZNv7mbb+vIM2cBB2WxkCCOr2MI02ANfFA2eS47dpAdPRYaYOovFyMhQmySNTmzpeJYcxlstS9It5HGtzeJRPwgyCDEbQ4E6hST3q+Bgid9BwrQ4eTo3sAb5sIha3IVrbYlVXpqhWdrsn8LkEms08kdMrJb96rMJNkYaJWyKgPC7GXI/GRli8lfiEL8a0ZOXPHT0nDlajcKLAyJhifhcOTWI6qWth2RlSK/aSSP9s4jjp3CzOz0O0M/XJxo8H+yG0ezuuV5KglkZSlhvJo3z0uX5bwmj5rOn6LBmMD2Mywdxfu84tT7NKkOp/nfSKP/WBWapsfbpeXoUpmhfI5GlwfZ19GJLT0kws6bBbiVppGAuKE8I9LeLUFl4AHKVueaDehDfn2r38XsO1JTKJvMsdcZJAx/ozGOmMNGe8riXfB2WyJrPSA/HFx/pKS1GVoZCshoJbc4QlMUTDJXFXxXx/YJHa3p6FKIpfvBqDG+TBn4csJSgR67Z1NsCWZTDWd6UlVldde4MSYTPEZahTmkTszKk9HTzqBXf8eAGFr7bxo5bhuYI+XGMUhXl/lHllM7vL5X8aHH2EU7lgWdmiE8Sht7SOcNiZxs/lgO+R6TeEhf17WTW1mFRSQ+jAfmEpjL6mRkaG2cpjPySZzzxllQHf9/g1LZo8X5eCVKUAppRMSWXnMfreFJLFeu/EENRHLBVSDF2h9vUTLtTZ2Gk9j1myGPk0LVmtycXD27kMCjwyNIIMas9FIrf1i+GcYYosl/qXaKWYW1GH10maKl8sJihuinH65BS7YcoFvzo5X5JSOPXZLaH9uPatfCvi6ICkkQ+JREEf3rMOv5MluNwC/MH0URUmjJ0W7POZMVP1wWRNT7Epd6Ga8eOF/fVOveJBMOiQ7Ekcf9z0XXtzGYjpYI8TwS105UyMjNkyahVjHUqRfbZdJMVzfV3h1W4uT5y52FmI5hZBWpfiuIssy4fr+fRX56hhAN/+Tpmm6NWTAjxMUXXW6z90TQxjo3xrIU8hMfDZehJmPyx+PgeUtn8jAyt8mjlyqrYjTOl2CyrVPeTNY14Mx0yDr7MPthU470cEtWWbWmnmIJg9jzNSmjBtCg94wwpOTxWjWSG4BPECwvzZCN7SWbe7OzmemGF4WtoGrQaADf12C5j9WpYIv8kpgDE9kdixgTN31AUYilt5mDHnjdZcYc6zq+3FlgdLefQIASI7CCFJdhvIvV4vWtl+gE/7IgJxui9eDmI4sTKdGlS6tn+shLrFF+B4TSPMkPcaQIWDSTwXlePNxcr4KIj8KS578KSADxpCFpzqM8thV0RVxn+8lmKsdNerkX0UJQGZkkkX7mw6VnSLGWhAnsrKMzTNkuv8bLGQ21m7dWrlXuDQ/7rGYKeWZqFDVONmFvY6bBcFHX8JIJBtP8NB0EUOiksuq97XnxvylyJRYaKONrUHfKSDDFWhcbyZfdspTB+ZVPvA0PHQ+uOtwI3f1+PfExqqnYztumKOJwXjulavUBun3m/WIamUFp2WKo+t4Rg57U/tRr4W606LNQ1hiD0RxRgj93jjLqD6TRQxC+1aaYCq7UVNcP80l/NcD0J1dW4rcd65d/iDxjxNZLIhtLN9VcwhGwRYqlc6k+norKoSShaT1I201Uv0jPE2vFyhkkpOJgzVA8GCCJzCMsldTVjrIh/dHWI1nnRBhvBkE9RnmsDV2H6idjurldyQidVa2bqbhPP0FaXWIV3QGOr3q8U9b/ZcvtEaPmfBkvG8O5UeP+wS1i63rQoSNA5nnYBwl9adRrpYWpavGC8NB74X4f8yhgfYvvacOUxt3+nHmNoHIqnapF1rrHuL0x+TqMP2T86LBW59CRBMr36eKaHZfCFPBoxMDHRhmsdEErjNN32sVQM4Q+sNWZlDAM9aop1+34Ra02uNO/AhKno4HPY6oXd87o+3asIEtTceWQJS7Y470ZU+cxeZThEgvWLGGI26I4sVld6Y7oO80dw+VwcgB0EPxNuMkDgnJiqVnQchxjUwvGeGlxGH3xxnkdtumpcE8fgcPfW2m5goVaKJt03Q4Htul8ALB+PZZcCdNpffcRVRfxIWfcCRi2l5VCdVW9hoF2X93FjmGCUOTGSCW/BKrprTUfO3tcqqdEatKhE0cW6loFHMUpZuNjCkMDQzAWwcQJNgn4eNdZa2mCeMY8UdGm5rRzpNAra4U2HLqw6i+UqKFt+GNYqQcdHcyHBzwqarUHT0ysbSlWy0iztvzLDuqDLizCKtmtfjfuyKK8VrRW5B7E5y46NWT2TThPBsvwDsS58gQdFAMN1blry4jRsj92ZocNCvSJurPmnTepvYfjt4HgFX388/s0ViCivLhQmCBsYSpilr2GWBiZXhlV445HmFssBpYGhOY47Cgs83zjLjzZPi5jGlg4CKfB0N7TdKMNUkdMWhs8GhHtRlVa/BrfaodjuRalq1n/X696eXX08ux1fthY0sMKXVwVN80tMyChc7x3mHsG9k5LgvhiCRG4YQwlfAYe2BjZtnuTlHeqy3Oa/LsaLIMCf9qwz35TKqLWhEgdTRvHddEWLfTKUT1TGUD1mQ4JIjtqP8WjZrGa9TWxyKwtTsCoWOnp5asVBSZMz8JI2V+I6JHVn+/4YHjCGWL1jcV4LRbmJSB6xwzZde/EVol8hRaau45Hg0qStiJuqqaCn695ryxBm4UGAJRODDGGIjY+UWsywVbnmn5uW+f4p/z5wI/lJYHUxJqBEN8tPrsqjVLngPTMEXxSzBq9TnrYIwQk3MRo3VjZKcf3KHfCiS+l0hoKxdU6aSy0LS9dUsmxq3B/DQ65LMeF7YeQvhHkLmha2xcXip8zWYbt3g7SFgi6mBN23E/dgwJyX3gRDcEsZxXq0HWZY9JiRp45xH70wleSw1dWYAy5MDymSwEe9HUaLdaMM/XLaRpO9MhQVcGRALth55N4ABE7gw/IX9JPDx6PWYNDrPXZuTwy2U4S73yara7AtGMxHTSijgt5p/J+Gs+zx35cuFZWKQ0EeFr6KteF7xE/MYqvN0EoIoXrJLoIVmZ31ApEGBRN42tvSv69U5UObvkQn+7PhH3JtAIFDqccMIKjFll3z2MQFSyZhIdIrpjnrSseWKTn6iPcobCmET57ezPhLGIauwTe4QghXvmM9Tiy9Ozx2VZi5LK5gQYUk8bOz4oyxhItu8bEZ2Y/E+8ofHJpx42xWhvz5N7+6812RuHQxdWbE0ESGYLG9CMAR5CdBlEkhDqOGg/D3XnLVJob/1cl8zsYeZHg90cmCOsfUbcbkmWF4IHXHoCrbyczXoFlzS+js4bHZFjfsNV5EVWyaGs58nlhmhsOJrS3nMc2yyYqGU+el0Lp/uLsiNcfWjZp58mXy2Gv6YlyJSborjzvCEjGzbybNdE6U2Gg9IG11045nGSeFab8hWHhGo1EYNpvNYSGqlyosxaNsIcj+VLhFMLtpJkvBEPyz+4l0U/85dqHbg65ZMjbuLy+TNRO3e5swC0VE+V7fpUL7NDz1AAI2eScw95px42MdHnUIuF40Yd+1isaFp5gkSQ+eYzs8Yz7RPhiaz5+l1etWOD5zdQdv2cWKsaZXCs/fY8Hhh4G7t1OnsPeud7QzKo/jw1NT012NMju+Zd8820ziFjsbMrtP0utPNBduv6/j0SCg03eH62gG+2yMpac/X6K4qI8uhlHyYk4h+t1v3k8qA65zZ3+R/evLCSzt/exwng5DoB7dERbLlmK8czaBeTBlG51+Dwd+W56G+3LbH4TdQwc5xEXOz0n3MuwB3lfuv48IcmovcA6TJT0Dz765gFXDqaPa8e2P79+/dz7cvtNQ3SEES6ZlmYJKCHFcmB1ukRDmFtD9n6T1sqePgS8aTYAyUCEaIQanQVmh2OT+Kj8EhE0kZtt5n+JLjuelIEVEolNrnz8RcuTIkSNHjhwL+M+c5Z8Wu/j7G6/b8zheCuDgpouoaIDf7knVM4C7p1kf0ux2lrx35xCtR0cW4sxZn71DErDFsslUDx6bqaqIWD0QBx3iFMuWJ73Jb3MwTVMg7lXY9q9SHf1O1X9YbqtfuSu5jiGZb+47K9j5d/VJSxSbWllKU0aUygfsGE9g2W5dHhLkaoTFoGm11l4BC4flCG5DXxTFsK6mDB3jXFuUI2wUjrqHZ6WSTQKeTZdYhCpRWKLm/s8VTYRHef8ppYauP1wMWSan/Q2lzu4vZRN5U2ejMKiMRydOqeQQdnKqx2oqv0rfYt5LB3NItevWpFfgB8WKLckRUp8VtSFfytPx7eHg/ePh72fEdW2NYM+bhegvuU7ZV/RgS7Nd464y8PlQZLEwQdFGzHRYZhh3+LDcdpQba1z3/74c35qOY7ODYg12Ep30ArkU3p8pCQEp2kXtMGTs4ryjXHFYAcpK/d1EW3LeykITBYj0KOxOjsuoxIVKytG+AxgZa4fh+bp4tySd5uUWzz2d5ulYfY39zro54SKT/R9bFlUNUnR19G582RtOFQPTf3IoZf1eiWdk9dkTbbeH/V74+fvk+IwghFyQa80oq3yg/GxTynNNSQyj3zlTqtJyuWYQW6+jEvn58P0+HMx38kU9f+0w0NWsCmBnhnzKzEuacsMfcrl2Ph2ODq5M1wHCYFMdYhAaS2r+KYwvkx8xDM1x6/BW2z27Gv37qdMNj/rDgh9Xg+XqNDvOymsXZy7Fmc9O3pHhlN600gaTqDpP1bd9oNts9ntHj4+Tb5PRaHR3soafoy9fJpNJt3Lf6zWbw6Hvz55WlNuXF/vz5cFE05neyZrPxbx+yJ9ZujrR9AGsXr6pOLf2zFYu4dsyePGwULlDNWE/FkplPk3UXpeB4V5QjZ/y8HKEigG29kMQHJZLfka3kuLYxhdAo3V/WnIMM/vRs1OYnunY9smPuHng1eTIPtjvX9wQ16EW29Vg7i8yZ9aUarobHHSOmrwyHfPk5nZrO0EWRny9xfuhQFVd97p3QcklpvQSsU1kyDxV0xEZfbpvDf0Zw8Wfe+c4/SK+VvfhBJzg4GW/bpBbaPipGnYJGaPOfW/Ybsc96PvmNtWrst8Mu+cSKhUNlXvcKeqTuwPHpTxTsjyBlvkXVl4dPl7C+pzLMCPfhT7aQiv8PHmHSrZmUL7z6OWYJQJ8xjIB/8N2nX8+3IetfmGxCU2RxcU+m2VE3wbJ/Hd51oUToV1oto4ePxzoJQd828B8CR9+d0ReJmuSVDVbd4tazbs7/LMStlrNZqHQ2Mm4AEe/4A+bffBluz9urwLi6K5DyoLF/dg3Ue+VTO5BCxarSlPCnUrbrgVnB6fH5+fnY4ZuZRkd/uq/5+ej09ODIAggxNSRXiQGr6jznodU2+xeBuwpMwUg8QgO88aN6LtTqAogvDrvQPQ4g2PzF0m5HKgqBBBe1JRosZiCZ0ZSdTz8ckzjIyFS8Ju+Ozhl80aOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDly5Mjxv4D/B+gWsKSBGtMPAAAAAElFTkSuQmCC" 

 />
      </div>

      {/* Icons for navigation */}
      <div className="flex-1 flex flex-col items-center space-y-4 py-4">
        {navItems.map(({ icon: Icon, label }, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="p-3">
                <Icon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side='right'>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>

      {/* Logout Button at the Bottom */}
      <div className="flex items-center justify-center pb-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" className="p-3">
              <LogOut className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Logout</TooltipContent>
        </Tooltip>
      </div>
    </Card>
  );
}
