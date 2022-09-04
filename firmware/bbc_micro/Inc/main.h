/**
  ******************************************************************************
  * @file           : main.h
  * @brief          : Header for main.c file.
  *                   This file contains the common defines of the application.
  ******************************************************************************
  ** This notice applies to any and all portions of this file
  * that are not between comment pairs USER CODE BEGIN and
  * USER CODE END. Other portions of this file, whether 
  * inserted by the user or by software development tools
  * are owned by their respective copyright owners.
  *
  * COPYRIGHT(c) 2022 STMicroelectronics
  *
  * Redistribution and use in source and binary forms, with or without modification,
  * are permitted provided that the following conditions are met:
  *   1. Redistributions of source code must retain the above copyright notice,
  *      this list of conditions and the following disclaimer.
  *   2. Redistributions in binary form must reproduce the above copyright notice,
  *      this list of conditions and the following disclaimer in the documentation
  *      and/or other materials provided with the distribution.
  *   3. Neither the name of STMicroelectronics nor the names of its contributors
  *      may be used to endorse or promote products derived from this software
  *      without specific prior written permission.
  *
  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
  * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
  * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
  * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
  * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
  * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
  * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
  * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  *
  ******************************************************************************
  */

/* Define to prevent recursive inclusion -------------------------------------*/
#ifndef __MAIN_H__
#define __MAIN_H__

/* Includes ------------------------------------------------------------------*/

/* USER CODE BEGIN Includes */

/* USER CODE END Includes */

/* Private define ------------------------------------------------------------*/

#define SLAVE_REQ_Pin GPIO_PIN_1
#define SLAVE_REQ_GPIO_Port GPIOF
#define JS_PB0_Pin GPIO_PIN_2
#define JS_PB0_GPIO_Port GPIOA
#define JS_PB1_Pin GPIO_PIN_3
#define JS_PB1_GPIO_Port GPIOA
#define POT_RESET_Pin GPIO_PIN_0
#define POT_RESET_GPIO_Port GPIOB
#define KB_BREAK_Pin GPIO_PIN_1
#define KB_BREAK_GPIO_Port GPIOB
#define KB_EN_Pin GPIO_PIN_2
#define KB_EN_GPIO_Port GPIOB
#define KB_EN_EXTI_IRQn EXTI2_3_IRQn
#define KB_ROW_C_Pin GPIO_PIN_10
#define KB_ROW_C_GPIO_Port GPIOB
#define KB_COL_A_Pin GPIO_PIN_11
#define KB_COL_A_GPIO_Port GPIOB
#define KB_COL_B_Pin GPIO_PIN_12
#define KB_COL_B_GPIO_Port GPIOB
#define KB_COL_C_Pin GPIO_PIN_13
#define KB_COL_C_GPIO_Port GPIOB
#define KB_COL_D_Pin GPIO_PIN_14
#define KB_COL_D_GPIO_Port GPIOB
#define KB_CA2_Pin GPIO_PIN_15
#define KB_CA2_GPIO_Port GPIOB
#define W_Pin GPIO_PIN_8
#define W_GPIO_Port GPIOA
#define DEBUG_Pin GPIO_PIN_10
#define DEBUG_GPIO_Port GPIOA
#define ERR_LED_Pin GPIO_PIN_11
#define ERR_LED_GPIO_Port GPIOA
#define ACT_LED_Pin GPIO_PIN_12
#define ACT_LED_GPIO_Port GPIOA
#define KB_ROW_A_Pin GPIO_PIN_8
#define KB_ROW_A_GPIO_Port GPIOB
#define KB_ROW_B_Pin GPIO_PIN_9
#define KB_ROW_B_GPIO_Port GPIOB

/* ########################## Assert Selection ############################## */
/**
  * @brief Uncomment the line below to expanse the "assert_param" macro in the 
  *        HAL drivers code
  */
/* #define USE_FULL_ASSERT    1U */

/* USER CODE BEGIN Private defines */

/* USER CODE END Private defines */

#ifdef __cplusplus
 extern "C" {
#endif
void _Error_Handler(char *, int);

#define Error_Handler() _Error_Handler(__FILE__, __LINE__)
#ifdef __cplusplus
}
#endif

#endif /* __MAIN_H__ */

/************************ (C) COPYRIGHT STMicroelectronics *****END OF FILE****/
