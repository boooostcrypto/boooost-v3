use anchor_lang::prelude::*;

declare_id!("4MDkCMjKguZ2bxTKksuzmbXt1BmsyZ4DkuA8R7iv61hf");

#[program]
pub mod contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
