namespace Sdpi.Actions
{
    using System.Threading.Tasks;
    using SharpDeck;
    using SharpDeck.Events.Received;
    using SharpDeck.Manifest;

    /// <summary>
    /// The counter action; displays the count which is increment on each press.
    /// </summary>
    [StreamDeckAction("Counter", "com.geekyeggo.sdpi.counter")]
    public class CounterAction : StreamDeckAction<CounterSettings>
    {
        /// <summary>
        /// Occurs when <see cref="IStreamDeckConnection.WillAppear" /> is received for this instance.
        /// </summary>
        /// <param name="args">The <see cref="ActionEventArgs{T}" /> instance containing the event data.</param>
        /// <returns>The task of handling the event.</returns>
        protected override Task OnWillAppear(ActionEventArgs<AppearancePayload> args)
        {
            // get the current, and set the title
            var settings = args.Payload.GetSettings<CounterSettings>();
            return this.SetTitleAsync(settings.Count.ToString());
        }

        /// <summary>
        /// Occurs when <see cref="IStreamDeckConnection.KeyDown" /> is received for this instance.
        /// </summary>
        /// <param name="args">The <see cref="ActionEventArgs{T}" /> instance containing the event data.</param>
        /// <returns>The task of handling the event.</returns>
        protected override Task OnKeyDown(ActionEventArgs<KeyPayload> args)
        {
            // increment the count
            var settings = args.Payload.GetSettings<CounterSettings>();
            settings.Count++;

            // save the settings, and set the title
            this.SetSettingsAsync(settings);
            return this.SetTitleAsync(settings.Count.ToString());
        }
    }
}
