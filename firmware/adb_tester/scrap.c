  for (int i = 0; i < SPI_BUF_SIZE; ++i)
    printf("%d ", backup_spi1_recv_buf[i]);
  printf("\n");
      printf("%d %d %x\n", buffered_code, adb_code, response);

  while (1)
  {
    DEBUG0_HI();
    process_spi_data();
    DEBUG0_LOW();
  /* USER CODE END WHILE */

  /* USER CODE BEGIN 3 */
    if(IS_ADB_DEVICE_PRESENT() == 0)
      continue;
    adb_status = adb_recv_cmd(&adb_data, 0);
    if(adb_status == ADB_LINE_STATUS_RESET)
      adb_reset();
    else if(adb_status != ADB_OK)
      continue;

    uint8_t this_addr = adb_data >> 4;

    mouse_event* this_mouse_event = mouse_buf_peek(&my_mouse_buf);
    if(this_mouse_event != NULL)
    {
      
    }




    adb_status = parse_adb_cmd(adb_data);
    if(adb_status == ADB_MOUSE_POLL)
      adb_mouse_update();
  }
  /* USER CODE END 3 */

}  
  // printf("%d %d\n", this_mouse_event->movement_x, this_mouse_event->movement_y);
  // mouse_buf_pop(&my_mouse_buf);
while (1)
  {

  /* USER CODE END WHILE */

  /* USER CODE BEGIN 3 */

    adb_status = adb_recv_cmd(&adb_data, 0);
    // printf("%d\n", adb_status);

    if(adb_status == ADB_LINE_STATUS_RESET)
      adb_reset();
    else if(adb_status != ADB_OK)
      continue;
    // printf("%d\n", adb_data);
    adb_status = parse_adb_cmd(adb_data);

    if(adb_status == ADB_MOUSE_POLL)
    {
      adb_mouse_update();
    }
    // if(adb_status == ADB_KB_POLL)
    // {
    //   DEBUG0_HI();
    //   DEBUG0_LOW();
    // }
  }

adb_status = adb_recv_cmd(&adb_data, 0);
  // if(cmd == ADB_CMD_TYPE_TALK && reg == 0 && addr == adb_mouse_current_addr && HAL_GetTick() - last_send > 500)
  // {
  //   uint16_t response = 0x8082;
  //   if(HAL_GetTick() % 2)
  //     response = 0x80fc;
  //   adb_send_response_16b(response);
  //   last_send = HAL_GetTick();
  // }

uint32_t last_send;
void adb_mouse_update(void)
{
  mouse_event* this_mouse_event = mouse_buf_peek(&my_mouse_buf);
  if(this_mouse_event == NULL)
    return;
  // uint16_t response = 0;
  // if(this_mouse_event->button_left == 0)
  //   response |= 0x8000;
  // if(this_mouse_event->button_right == 0)
  //   response |= 0x80;
  response |= ((uint8_t)(this_mouse_event->movement_x)) & 0x7f;
  response |= (((uint8_t)(this_mouse_event->movement_y)) & 0x7f) << 8;
  adb_send_response_16b(response);
  printf("0x%x\n", response);

  if(HAL_GetTick() - last_send > 100)
  {
    // uint16_t response = 0x8080;
    // if(HAL_GetTick() % 2)
    //   response = 0x80fc;
    DEBUG1_HI();
    adb_send_response_16b(response);
    DEBUG1_LOW();
    last_send = HAL_GetTick();
  }

  mouse_buf_reset(&my_mouse_buf);
}


    if(adb_status == ADB_LINE_STATUS_RESET)
      adb_reset();
    else if(adb_status != ADB_OK)
      continue;
    
    adb_status = parse_adb_cmd(adb_data);
    if(adb_status == ADB_MOUSE_POLL)
    {
      // DEBUG0_HI();
      adb_mouse_update();
      // DEBUG0_LOW();
    }
  if(cmd == ADB_CMD_TYPE_TALK && reg == 0 && addr == adb_mouse_current_addr && HAL_GetTick() - last_send > 500)
  {
    uint16_t response = 0x80fc;
    DEBUG1_HI();
    adb_send_response_16b(response);
    last_send = HAL_GetTick();
    printf("sending...\n");
    DEBUG1_LOW();
  }

  if(cmd == ADB_CMD_TYPE_TALK && reg == 0 && addr == adb_kb_current_addr && HAL_GetTick() - last_send > 500)
  {
    uint16_t response = 0x580;
    DEBUG1_HI();
    adb_send_response_16b(response);
    last_send = HAL_GetTick();
    printf("sending...\n");
    DEBUG1_LOW();
  }

  
  if(micros() - atten_start < 700)
    printf("%d\n", micros() - atten_start);

void adb_recv_cmd(void)
{
  HAL_GPIO_WritePin(DEBUG0_GPIO_Port, DEBUG0_Pin, GPIO_PIN_SET);
  uint8_t result = look_for_atten(1);
  HAL_GPIO_WritePin(DEBUG0_GPIO_Port, DEBUG0_Pin, GPIO_PIN_RESET);
  // printf("%d\n", result);

  uint8_t atten_result = look_for_atten(1);

  if(atten_result != )
}

  // if ADB data line is high
  while(ADB_READ_DATA_PIN() == GPIO_PIN_SET)
  {
    if(blocking == 0)
      return ADB_LINE_STATUS_IDLE;
  }
  printf("%d %d\n", lo_time, hi_time);


    HAL_GPIO_WritePin(DEBUG0_GPIO_Port, DEBUG0_Pin, GPIO_PIN_SET);
    // parse_adb_cmd(adb_data);
    printf("%d 0x%x\n", adb_status, adb_data);
    HAL_GPIO_WritePin(DEBUG0_GPIO_Port, DEBUG0_Pin, GPIO_PIN_RESET);
    // HAL_Delay(4);

    if(adb_status != 0)
      HAL_GPIO_WritePin(DEBUG0_GPIO_Port, DEBUG0_Pin, GPIO_PIN_SET);
    else
      HAL_GPIO_WritePin(DEBUG0_GPIO_Port, DEBUG0_Pin, GPIO_PIN_RESET);

    if((adb_data & 0xf) == 0x4)
      HAL_GPIO_WritePin(DEBUG1_GPIO_Port, DEBUG1_Pin, GPIO_PIN_SET);
    else
      HAL_GPIO_WritePin(DEBUG1_GPIO_Port, DEBUG1_Pin, GPIO_PIN_RESET);
    // printf("%d 0x%x %x\n", adb_status, adb_data, adb_data & 0xf);


    if(adb_status != 0)
      HAL_GPIO_WritePin(DEBUG0_GPIO_Port, DEBUG0_Pin, GPIO_PIN_SET);
    else
      HAL_GPIO_WritePin(DEBUG0_GPIO_Port, DEBUG0_Pin, GPIO_PIN_RESET);

    printf("%d 0x%x\n", adb_status, adb_data);

uint16_t adb_mouse_reg[ADB_REG_SIZE];
uint16_t adb_kb_reg[ADB_REG_SIZE];
#define ADB_REG_SIZE 4


default addr:
2 = keyboard
3 = mouse

host: 0000 1111 = 0x0f addr 0 talk reg 3
no response

host: 0001 1111 = 0x1f addr 1 talk reg 3
no response

host: 0010 1111 = 0x2f addr 2 talk reg 3
device: 0110 0000 0000 0101
keyboard

host: 0011 1111 = 0x3f addr 3 talk reg 3
device: 0110 1010 0000 0001
mouse

host: 0100 1111 = 0x4f addr 4 talk reg 3
no response

...

host: 1111 1111 = 0xff addr 15 talk reg 3
no response

----------

host: 0010 1011 addr 2 listen reg 3
0000 1111 1111 1110 change addr to 0xf

host: 00101111 addr 2 talk reg 3
no response

host: 1111 1011 addr 0xf listen reg 3
0000 0010 1111 1110 change addr to 0x2

host: 1111 1111 addr 0xf talk reg 3
no response

-----------

host: 0011 1011 addr 3 listen reg 3
0000 1111 1111 1110  change addr to 0xf

host: 0011 1111 addr 3 talk reg 3
no response

host: 1111 1011 addr 0xf listen reg 3
0000 0011 1111 1110 change addr to 0x3


host: 1111 1111 addr 0xf talk reg 3
no response

-----

host: 0010 1011

if(cmd == ADB_CMD_TYPE_LISTEN && reg == 3 && addr == adb_mouse_current_addr)
  {
    uint16_t host_cmd;
    DEBUG0_HI();
    adb_listen_16b(&host_cmd);
    DEBUG0_LOW();
    if((host_cmd & ADB_CHANGE_ADDR) == ADB_CHANGE_ADDR)
    {
      adb_mouse_current_addr = (host_cmd & 0xf00) >> 8;
      printf("m %x\n", adb_mouse_current_addr);
    }
  }

  if(cmd == ADB_CMD_TYPE_LISTEN && reg == 3 && addr == adb_kb_current_addr)
  {
    uint16_t host_cmd;
    DEBUG0_HI();
    adb_listen_16b(&host_cmd);
    DEBUG0_LOW();
    if((host_cmd & ADB_CHANGE_ADDR) == ADB_CHANGE_ADDR)
    {
      adb_kb_current_addr = (host_cmd & 0xf00) >> 8;
      printf("kb %x\n", adb_kb_current_addr);
    }
  }

 // printf("%x %x\n", host_cmd, adb_mouse_current_addr);
      printf("!\n");
    printf("%x %x\n", host_cmd, host_cmd & ADB_CHANGE_ADDR);

  // if(cmd == ADB_CMD_TYPE_TALK && reg == 3)
  //   printf("0x%x %d %d %d\n", data, addr, cmd, reg);

void write_test(void)
{
  // adb_mouse_reg[3] = 0x6001;
  // uint16_t rand_id = (rand() % 0xf) << 8;
  // adb_mouse_reg[3] |= rand_id;

  // delay_us(200); // stop-to-start time
  // TEST_ADB_DATA_LOW();
  // delay_us(35);
  // TEST_ADB_DATA_HI();
  // delay_us(65);

  // adb_write_16(adb_mouse_reg[3]);

  // TEST_ADB_DATA_LOW();
  // delay_us(65);
  // TEST_ADB_DATA_HI();
}