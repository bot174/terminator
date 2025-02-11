// This script only works on Windows version of Minecraft!

import { world } from "mojang-minecraft";

world.events.tick.subscribe(() => {
  let date_ob = new Date();
  let day = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  if ((month == 12 && 19 <= day <= 31) || (month == 1 && 1 <= day <= 8)) {
    world.getDimension('overworld').runCommand('event entity @e[type=entity:terminator] terminator:christmas_skin');
    world.getDimension('nether').runCommand('event entity @e[type=entity:terminator] terminator:christmas_skin');
     world.getDimension('the end').runCommand('event entity @e[type=entity:terminator] terminator:christmas_skin');
  } else {
    world.getDimension('overworld').runCommand('event entity @e[type=entity:terminator] terminator:default_skin');
    world.getDimension('nether').runCommand('event entity @e[type=entity:terminator] terminator:default_skin');
    world.getDimension('the end').runCommand('event entity @e[type=entity:terminator] terminator:default_skin');
  };
})
