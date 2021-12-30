namespace Sdpi.Actions
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using SharpDeck;
    using SharpDeck.Events.Received;
    using SharpDeck.PropertyInspectors;
    using SharpDeck.PropertyInspectors.Payloads;

    /// <summary>
    /// The counter action; displays the count which is increment on each press.
    /// </summary>
    [StreamDeckAction("com.geekyeggo.sdpi.counter")]
    public class CounterAction : StreamDeckAction<CounterSettings>
    {
        /// <summary>
        /// Gets the options.
        /// </summary>
        /// <returns>The options payload.</returns>
        [PropertyInspectorMethod("GetOptions")]
        public OptionsPayload GetOptions()
        {
            return new OptionsPayload
            {
                Options = new List<Option>
                {
                    new Option("Odd Numbers", new List<Option>
                    {
                        new Option("One", "1"),
                        new Option("Three", "3"),
                        new Option("Five", "5")
                    }),
                    new Option("Even Numbers", new List<Option>
                    {
                        new Option("Two", "2"),
                        new Option("Two", "4")
                    })
                }
            };
        }

        /// <summary>
        /// Gets the options, with a forced refresh.
        /// </summary>
        /// <returns>The options payload.</returns>
        [PropertyInspectorMethod("GetOptionsWithRefresh")]
        public OptionsPayload GetOptionsWithRefresh()
        {
            return new OptionsPayload
            {
                Options = new List<Option>
                {
                    new Option("Refreshed", new List<Option>
                    {
                        new Option("One Hundred", "100"),
                        new Option("Two Hundred", "200")
                    })
                }
            };
        }

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
