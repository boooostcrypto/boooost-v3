use anchor_lang::prelude::*;

declare_id!("BR33HnoFUeDK1mzpAUAqJK2XgasBoXiDZmNEf6WG8oBT");

#[program]
pub mod anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
