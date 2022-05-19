#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "helpers.h"
#include "shared.h"

void kb_buf_reset(kb_buf *lb)
{
  lb->head = 0;
  lb->tail = 0;
  memset(lb->keycode_buf, 0, lb->size);
  memset(lb->keyvalue_buf, 0, lb->size);
}

uint8_t kb_buf_is_full(kb_buf *lb)
{
	return lb->tail == (lb->head + 1) % lb->size;
}

uint8_t kb_buf_is_empty(kb_buf *lb)
{
	return lb->tail == lb->head;
}

uint8_t kb_buf_add(kb_buf *lb, uint8_t code, uint8_t value)
{
	if(kb_buf_is_full(lb))
		return 1;
	lb->keycode_buf[lb->head] = code;
	lb->keyvalue_buf[lb->head] = value;
	lb->head = (lb->head + 1) % lb->size;
	return 0;
}

uint8_t kb_buf_peek(kb_buf *lb, uint8_t* code, uint8_t* value)
{
	if(kb_buf_is_empty(lb))
		return 1;
	*code = lb->keycode_buf[lb->tail];
	*value = lb->keyvalue_buf[lb->tail];
	return 0;
}

void kb_buf_pop(kb_buf *lb)
{
	if(!kb_buf_is_empty(lb))
		lb->tail = (lb->tail + 1) % lb->size;;
}

void kb_buf_init(kb_buf *lb, uint8_t size)
{
  lb->size = size;
  lb->keycode_buf = malloc(size);
  lb->keyvalue_buf = malloc(size);
  kb_buf_reset(lb);
}

// ----------------------------

uint8_t mouse_buf_is_full(mouse_buf *lb)
{
	return lb->tail == (lb->head + 1) % MOUSE_EVENT_BUFFER_SIZE;
}

uint8_t mouse_buf_is_empty(mouse_buf *lb)
{
	return lb->tail == lb->head;
}

uint8_t mouse_buf_add(mouse_buf *lb, mouse_event* event)
{
	if(mouse_buf_is_full(lb))
		return 1;
	memcpy(&lb->mouse_events[lb->head], event, sizeof(mouse_event));
	lb->head = (lb->head + 1) % MOUSE_EVENT_BUFFER_SIZE;
	return 0;
}

mouse_event* mouse_buf_peek(mouse_buf *lb)
{
	if(mouse_buf_is_empty(lb))
		return NULL;
	return &lb->mouse_events[lb->tail];
}

void mouse_buf_pop(mouse_buf *lb)
{
	if(!mouse_buf_is_empty(lb))
		lb->tail = (lb->tail + 1) % MOUSE_EVENT_BUFFER_SIZE;
}

void mouse_buf_reset(mouse_buf *lb)
{
  lb->head = 0;
  lb->tail = 0;
  memset(lb->mouse_events, 0, MOUSE_EVENT_BUFFER_SIZE * sizeof(mouse_event));
}

void mouse_buf_init(mouse_buf *lb)
{
  lb->mouse_events = malloc(MOUSE_EVENT_BUFFER_SIZE * sizeof(mouse_event));
  mouse_buf_reset(lb);
}

