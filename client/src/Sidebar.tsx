import { BirdIcon } from "./BirdIcon";
import { SidebarItemBookmarks } from "./SidebarItemBookmarks";
import { SidebarItemHome } from "./SidebarItemHome";
import { SidebarItemLists } from "./SidebarItemLists";
import { SidebarItemMessages } from "./SidebarItemMessages";
import { SidebarItemNotification } from "./SidebarItemNotification";
import { SidebarItemProfile } from "./SidebarItemProfile";
import { SidebarItemSearchTopics } from "./SidebarItemSearchTopics";
import { SidebarItemSeeMore } from "./SidebarItemSeeMore";

export const Sidebar = () => (
  <div>
    <div>
      <BirdIcon />
    </div>
    <SidebarItemHome />
    <SidebarItemSearchTopics />
    <SidebarItemNotification />
    <SidebarItemMessages />
    <SidebarItemBookmarks />
    <SidebarItemLists />
    <SidebarItemProfile />
    <SidebarItemSeeMore />
    <button>ツイート</button>
  </div>
);
