#ifndef __PS2MOUSE_H
#define __PS2MOUSE_H

#ifdef __cplusplus
 extern "C" {
#endif 

#include "stm32f0xx_hal.h"

#define PS2_BUS_IDLE 3
#define PS2_BUS_INHIBIT 2
#define PS2_BUS_REQ_TO_SEND 1
#define PS2_BUS_UNKNOWN 0

void ps2mouse_init(GPIO_TypeDef* clk_port, uint16_t clk_pin, GPIO_TypeDef* data_port, uint16_t data_pin);
uint8_t ps2mouse_get_bus_status(void);
uint8_t ps2mouse_read(uint8_t* result, uint8_t timeout_ms);
uint8_t ps2mouse_write(uint8_t data, uint8_t timeout_ms);
void ps2mouse_host_req_reply(uint8_t cmd, mouse_event* mevent);
void ps2mouse_release_lines(void);
uint8_t ps2mouse_get_outgoing_data(mouse_event* this_event, ps2_outgoing_buf* pbuf);
uint8_t ps2mouse_send_update(ps2_outgoing_buf* pbuf);
uint8_t ps2mouse_write_nowait(uint8_t data);
void ps2mouse_reset(void);
void ps2mouse_restore_defaults(void);


#define PS2_OK 0
#define PS2_ERROR_SCAN_DISABLED 1
#define PS2_ERROR_UNKNOWN_CODE_SET 9
#define PS2_ERROR_HOST_INHIBIT 69
#define PS2_ERROR_UNUSED_CODE 2
#define PS2_ERROR_UNKNOWN 3
#define PS2_ERROR_TIMEOUT 4

#ifdef __cplusplus
}
#endif

#endif


